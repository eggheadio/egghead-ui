import React, {PropTypes} from 'react'
import {keys} from 'lodash'

export const sizes = {
  1: '',
  2: 'fa-lg',
  3: 'fa-2x',
  4: 'fa-3x',
  5: 'fa-4x',
  6: 'fa-5x',
}

export const types = {
  'success': 'check-circle',
  'cancel': 'times-circle',
  'add': 'plus-circle',
  'warning': 'exclamation-circle',
  'remove': 'minus-circle',
  'question': 'question-circle',
  'menu': 'bars',
  'box': 'square-o',
  'box-check': 'check-square-o',
  'check': 'check',
  'close': 'close',
  'info': 'info-circle',
  'clock': 'clock-o',
  'dollar': 'money',
  'course': 'folder-open-o',
  'lesson': 'file-o',
  'refresh': 'refresh',
}

export const colors = {
  'success': 'green',
  'primary': 'blue',
  'warning': 'yellow',
  'danger': 'red',
  'light': 'light-gray'
}

const Icon = ({
  type,
  size,
  color,
  spin,
  className,
}) => (
  <span className={`
    fa
    fa-${types[type]} 
    ${sizes[size]}
    ${colors[color]}
    ${className}
    ${spin ? 'fa-spin' : ''}
  `} />
)

Icon.propTypes = {
  type: PropTypes.oneOf(keys(types)),
  size: PropTypes.oneOf(keys(sizes)),
  color: PropTypes.oneOf(keys(colors)),
  spin: PropTypes.bool,
  className:  PropTypes.string,
}

Icon.defaultProps = {
  size: '1',
  spin: false,
}

export default Icon
