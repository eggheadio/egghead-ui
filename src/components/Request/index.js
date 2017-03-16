import React, {Component, PropTypes} from 'react'
import axios from 'axios'
import {first} from 'lodash'
import Error from '../Error'
import Loading from './components/Loading'

const http = axios.create()

const methods = [
  'get',
  'post',
  'put',
  'delete',
]

export default class Request extends Component {

  state = {
    running: !this.props.lazy,
    hasRunOnce: false,
    response: null,
    data: null,
    error: null,
    subscription: null,
  }

  componentDidMount() {
    const {lazy, subscribe, subscribeInterval} = this.props
    if (!lazy) {
      this.request()
      if (subscribe) {
        this.setState({
          subscription: window.setInterval(this.request, subscribeInterval)
        })
      }
    }
  }

  componentWillUnmount() {
    this.willUnmount = true
    const {subscription} = this.state
    window.clearInterval(subscription)
  }

  request = (body = this.props.body) => {
    this.setState({
      running: true, 
      request: true
    }, () => {
      http.request({
        method: this.props.method,
        url: this.props.url,
        params: this.props.params,
        headers: this.props.headers,
        data: body,
      })
        .then(response => {
          if (this.willUnmount) {
            return
          }
          this.setState({
            running: false,
            hasRunOnce: true,
            response,
            data: response.data,
            error: null,
          }, () => {
            if (this.props.onResponse) {
              this.props.onResponse(null, this.state.response)
            }
            if (this.props.onData) {
              this.props.onData(this.state.data)
            }
          })
        })
        .catch(error => {
          if (this.willUnmount) {
            return
          }
          this.setState({
            running: false,
            hasRunOnce: true,
            response: error,
            error,
          }, () => {
            if (this.props.onResponse) {
              this.props.onResponse(this.state.response)
            }
            if (this.props.onError) {
              this.props.onError(this.state.error)
            }
          })
        })
    })
  }

  render() {
    const {children, lazy} = this.props
    const {running, hasRunOnce, error, data, response} = this.state
    if (!children) {
      return null
    }
    if (running && (lazy || !hasRunOnce)) {
      return <Loading />
    }
    if (error) {
      return (
        <Error>
          {`Error: ${error.message}`}
        </Error>
      )
    }
    return this.props.children({
      request: this.request,
      running,
      error,
      data,
      response,
    }) || null
  }
}

Request.propTypes = {
  children: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  params: PropTypes.object,
  headers: PropTypes.object,
  body: PropTypes.object,
  lazy: PropTypes.bool,
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
