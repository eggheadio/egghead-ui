import jwt from 'jwt-simple'
import windowMock from 'package/utils/windowMock'
import removeQueryString from './utils/removeQueryString'
import getUrlParameter from './utils/getUrlParameter'

const universalWindow = typeof(window) === 'undefined' 
  ? windowMock 
  : window

const decodeToken = (token) => jwt.decode(token, null, true)

const login = () => {
  if (universalWindow.localStorage.getItem('token')) {
    const token = universalWindow.localStorage.getItem('token')
    return decodeToken(token)
  }
  if (getUrlParameter('jwt')) {
    const token = getUrlParameter('jwt')
    universalWindow.localStorage.setItem('token', token)
    removeQueryString()
    return decodeToken(token)
  }
}

export default login
