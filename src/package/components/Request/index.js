import React, {Component} from 'react'
import {includes} from 'lodash'
import {logout} from 'utils/authentication'
import RequestBase from './components/RequestBase'

class Request extends Component {

  getHeaders = () => ({
    ...this.props.headers,
    Authorization: localStorage.token
      ? `Bearer ${localStorage.token}`
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

export default Request
