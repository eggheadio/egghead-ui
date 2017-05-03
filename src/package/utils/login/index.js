import jwt from 'jwt-simple'
import {get, set} from 'lodash'
import removeQueryString from './utils/removeQueryString'
import getUrlParameter from './utils/getUrlParameter'

const decodeToken = (token) => jwt.decode(token, null, true)

const login = () => {
  if (get(localStorage, 'token')) {
    return decodeToken(get(localStorage, 'token'))
  }
  if (getUrlParameter('jwt')) {
    const token = getUrlParameter('jwt')
    set(localStorage, 'token', token)
    removeQueryString()
    return decodeToken(token)
  }
}

export default login
