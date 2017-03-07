import React, {PropTypes} from 'react'
import {keys, first} from 'lodash'

const sharedClassName = 'sans-serif white'

const classNameByType = {
  medium: 'f5',
  small: 'f6',
}

export const types = keys(classNameByType)

const Paragraph = ({
  children,
  type,
}) => (
  <p className={`${sharedClassName} ${classNameByType[type]}`}>
    {children}
  </p>
)

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(types),
}

Paragraph.defaultProps = {
  type: first(types),
}

export default Paragraph
