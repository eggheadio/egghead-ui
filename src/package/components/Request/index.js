import React, {Component, PropTypes} from 'react'
import {includes, first, get} from 'lodash'
import logout from 'package/utils/logout'
import RequestBase from './components/RequestBase'

export const methods = [
  'get',
  'post',
  'put',
  'delete',
]

class Request extends Component {

  getHeaders = () => ({
    ...this.props.headers,
    Authorization: get(localStorage, 'token')
      ? `Bearer ${get(localStorage, 'token')}`
      : null,
    'Content-Type': 'application/json',
  })

  handleError = (error) => {
    if (includes([401, 403], error.response.status)) {
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
  subscribeInterval: 10000,
}

export default Request
