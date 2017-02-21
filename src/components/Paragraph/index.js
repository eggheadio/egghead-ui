import React, {PropTypes} from 'react'
import {keys, first} from 'lodash'

const sharedClassName = 'sans-serif white'

const classNameByType = {
  default: 'f5',
  small: 'f6',
}

export const types = keys(classNameByType)

const Paragraph = ({children, type = first(types)}) => (
  <p className={`${sharedClassName} ${classNameByType[type]}`}>
    {children}
  </p>
)

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(types),
}

export default Paragraph
