import {reduce, replace, isArray} from 'lodash'

export default (params) => (
  replace(reduce(params, (memo, value, key) => (
    `${memo}&${key}=${isArray(value) ? value.join(',') : value}`
  ), ''), '&', '?')
)
