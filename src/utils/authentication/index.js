import jwt from 'jwt-simple'
import removeQueryString from './utils/removeQueryString'
import getUrlParameter from './utils/getUrlParameter'

const decodeToken = (token) => jwt.decode(token, null, true)

export const login = (addTokenData) => {
  if (localStorage.getItem('token')) {
    const token = localStorage.getItem('token')
    return decodeToken(token)
  }
  if (getUrlParameter('jwt')) {
    const token = getUrlParameter('jwt')
    localStorage.setItem('token', token)
    removeQueryString()
    return decodeToken(token)
  }
}

export const logout = () => {
  localStorage.removeItem('token')
  window.location.reload()
}
