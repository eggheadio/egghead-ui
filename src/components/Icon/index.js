import React, {PropTypes} from 'react'
import {keys} from 'lodash'

export const sizes = {
  1: '',
  2: 'fa-lg',
  3: 'fa-2x',
  4: 'fa-3x',
  5: 'fa-4x',
  6: 'fa-5x'
}

export const types = {
  'add': 'plus-circle',
  'arrow-right': 'arrow-right',
  'box': 'square-o',
  'box-check': 'check-square-o',
  'cancel': 'times-circle',
  'check': 'check',
  'chevron-right': 'chevron-right',
  'clock': 'clock-o',
  'close': 'close',
  'course': 'folder-open-o',
  'lesson': 'file-o',
  'menu': 'bars',
  'more-info': 'info-circle',
  'play': 'play',
  'question': 'question-circle',
  'refresh': 'refresh',
  'remove': 'minus-circle',
  'revenue': 'money',
  'step-complete': 'check-square-o',
  'step-incomplete': 'square-o',
  'subscriber-minutes': 'clock-o',
  'success': 'check-circle',
  'warning': 'exclamation-circle',
  'info': 'info-circle',
  'dollar': 'money'
}

export const colors = {
  'success': 'green',
  'primary': 'blue',
  'warning': 'yellow',
  'danger': 'red',
  'light': 'light-gray',
  'orange': 'orange',
  'turquoise': 'turquoise'
}

const Icon = ({
  type,
  size,
  color,
  spin,
  className
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
  className: PropTypes.string
}

Icon.defaultProps = {
  size: '1',
  spin: false
}

export default Icon
