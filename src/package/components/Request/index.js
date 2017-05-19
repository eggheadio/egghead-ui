import React, {Component, PropTypes} from 'react'
import {includes, first} from 'lodash'
import logout from 'package/utils/logout'
import windowMock from 'package/utils/windowMock'
import RequestBase from './components/RequestBase'

const universalWindow = typeof(window) === 'undefined' 
  ? windowMock 
  : window

export const methods = [
  'get',
  'post',
  'put',
  'delete',
]

class Request extends Component {

  getHeaders = () => {
    const headers = {...this.props.headers}
    if (this.props.auth) {
      return {
        ...headers,
        Authorization: universalWindow.localStorage.token
          ? `Bearer ${universalWindow.localStorage.token}`
          : null,
        'Content-Type': 'application/json',
      }
    }

    return headers
  }

  handleError = (error) => {
    if (includes([401, 403], error.response.status) && this.props.auth) {
      logout()
    }
    if (this.props.onError) {
      this.props.onError(error)
    }
  }

  render() {
    const {url, children, ...rest} = this.props
    return (
      <RequestBase
        {...rest}
        url={url}
        headers={this.getHeaders()}
        onError={this.handleError}
      >
        {({request, running, error, data, response}) => {
          return children({
            request,
            running,
            error,
            data,
            response,
          })
        }}
      </RequestBase>
    )
  }
}

Request.propTypes = {
  children: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  lazy: PropTypes.bool,
  auth: PropTypes.bool,
  placeholder: PropTypes.node,
  params: PropTypes.object,
  headers: PropTypes.object,
  body: PropTypes.object,
  onResponse: PropTypes.func,
  onData: PropTypes.func,
  onError: PropTypes.func,
  method: PropTypes.oneOf(methods),
  subscribe: PropTypes.bool,
  subscribeInterval: PropTypes.number,
}

Request.defaultProps = {
  method: first(methods),
  subscribe: false,
  auth: false,
  subscribeInterval: 10000,
}

export default Request
