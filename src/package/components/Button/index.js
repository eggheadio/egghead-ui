import React, { PropTypes } from 'react'
import {keys, first} from 'lodash'
import styled from 'styled-components'
import colors from 'utils/colors'

const commonClasses = 'link dib fw6 tracked tc br2 ttu ba pointer'

const sizedBtnClasses = {
  'large': 'f5 pa3',
  'extra-large': 'f5 lh-solid ph4 pv4',
  'small': 'f5 lh-solid pa3',
  'extra-small': 'f6 pa2',
}

export const sizes = keys(sizedBtnClasses)

const styleMap = (size) => {
  const classes = {
    'extra-small': ['min-width: 70px;'],
    'small': ['min-width: 140px;'],
    'large': ['line-height: 2rem;', 'min-width: 200px;'],
    'extra-large': ['min-width: 280px;']
  }

  return size === undefined 
    ? classes['large']
    : classes[size]
}

const StyledButton = styled(({
  children,
  href,
  size,
  outline,
  pill,
  onClick,
  color,
}) => {

  const colorByBackground = {
    white: 'dark-gray',
  }

  const btnClasses = `
    b--${color}
    ${outline
      ? `bg-transparent ${color}` 
      : `bg-${color} ${colorByBackground[color] || 'white'}`
    }
  `

  const sizeClasses = sizedBtnClasses[size]

  return (
    <button
      href={href}
      className={`${commonClasses} ${btnClasses} ${sizeClasses} ${pill ? 'br-pill' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
})`${props => styleMap(props.size)}`

StyledButton.displayName = 'Button'

StyledButton.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(sizes),
  outline: PropTypes.bool,
  pill: PropTypes.bool,
  color: PropTypes.oneOf(colors),
}

StyledButton.defaultProps = {
  size: first(sizes),
  outline: false,
  pill: false,
  color: 'orange',
}

export default StyledButton
