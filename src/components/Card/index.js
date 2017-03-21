import React, {PropTypes} from 'react'
import {keys, first} from 'lodash'

const classNameByLevel = {
  1: 'br2 shadow-1',
  2: 'br3 shadow-2',
}

export const levels = keys(classNameByLevel)

const Card = ({children, level}) => (
  <section className={`bg-white dark-gray ${classNameByLevel[level]}`}>
    {children}
  </section>
)

Card.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf(levels),
}

Card.defaultProps = {
  level: first(levels),
}

export default Card
