import React, { PropTypes } from 'react'
import styled from 'styled-components'

export const sizes = ['large', 'small', 'extra-large', 'extra-small']
export const colors = ['green', 'yellow', 'red', 'blue', 'white', 'orange', 'turquoise']

const commonClasses = 'link dib fw6 tracked tc br2 ttu ba pointer'

const sizedBtnClasses = {
  'large': 'f5 pa3',
  'small': 'f5 lh-solid pa3',
  'extra-small': 'f6 pa2',
  'extra-large': 'f5 lh-solid ph4 pv4'
}

const solidBtnClasses = {
  green: 'b--transparent bg-green dark-navy hover-bg-dark-green',
  yellow: 'b--transparent bg-yellow dark-navy hover-bg-orange hover-white',
  red: 'b--red bg-red white hover-b--dark-red hover-bg-dark-red',
  blue: 'b--transparent bg-blue white hover-bg-dark-blue',
  white: 'b--white bg-white dark-navy hover-bg-light-gray',
  orange: 'b--orange bg-orange bw1 navy',
  turquoise: 'b--turquoise bg-turquoise bw1 navy'
}

const outlineBtnClasses = {
  green: 'b--green green bg-transparent hover-dark-navy hover-bg-green',
  yellow: 'b--yellow yellow bg-transparent hover-dark-navy hover-bg-yellow',
  red: 'b--red red bg-transparent hover-dark-navy hover-bg-red',
  blue: 'b--blue blue bg-transparent white hover-bg-dark-blue',
  white: 'b--white white bg-transparent hover-dark-navy hover-bg-white',
  orange: 'b--orange orange bg-transparent hover-dark-navy hover-bg-orange bw1',
  turquoise: 'b--turquoise turquoise bg-transparent hover-dark-navy hover-bg-turquoise bw1'
}

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
  color,
  size,
  outline,
  pill,
  onClick,
}) => {
  const btnClasses = outline ? outlineBtnClasses[color] : solidBtnClasses[color]
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

StyledButton.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf(sizes),
  outline: PropTypes.bool,
  pill: PropTypes.bool,
}

StyledButton.defaultProps = {
  color: 'white',
  size: 'large',
  outline: false,
  pill: false,
}

export default StyledButton
