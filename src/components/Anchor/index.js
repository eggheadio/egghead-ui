import React, {PropTypes} from 'react'
import {first} from 'lodash'
import Icon from '../Icon'

export const types = ['inline', 'prominent']

export const colors = [
  'blue',
  'white',
]

const Anchor = ({
  children,
  url,
  isSeparateTab,
  type,
  color,
}) => {

  const classNameByType = {
    inline: color,
    prominent: `${color} ttu no-underline flex items-center`,
  }

  const prefixByType = {
    inline: null,
    prominent: (
      <span className='mr1'>
        <Icon 
          type='chevron-right' 
          color={color}
          size='4'
        />
      </span>
    ),
  }

  return (
    <a
      href={url}
      target={isSeparateTab ? '_blank' : '_self'}
      className={classNameByType[type]}
    >
      {prefixByType[type]}{children}
    </a>
  )
}

Anchor.propTypes = {
  children: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isSeparateTab: PropTypes.bool,
  type: PropTypes.oneOf(types),
  color: PropTypes.oneOf(colors).isRequired,
}

Anchor.defaultProps = {
  isSeparateTab: false,
  type: first(types),
  color: first(colors),
}

export default Anchor
