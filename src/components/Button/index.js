import React, { PropTypes } from 'react'
import styled from 'styled-components'

// TODO: Figure out why "link" is not applying "no-underline"
// TODO: Figure out vertical alignment small bottom space

const commonClasses = 'link dib f5 fw6 tracked tc br2 ttu ba pointer'

const sizes = ['large', 'small', 'extra-large']
const types = ['success', 'warning', 'danger', 'primary', 'default']

const sizedBtnClasses = {
  'large': 'pa3',
  'small': 'lh-solid pa3',
  'extra-large': 'lh-solid ph4 pv4'
}

const solidBtnClasses = {
  success: 'b--transparent bg-green dark-navy hover-bg-dark-green',
  warning: 'b--transparent bg-yellow dark-navy hover-bg-orange hover-white',
  danger: 'b--red bg-red white hover-b--dark-red hover-bg-dark-red',
  primary: 'b--transparent bg-blue white hover-bg-dark-blue',
  default: 'b--white bg-white dark-navy hover-bg-light-gray'
}

const outlineBtnClasses = {
  success: 'b--green green bg-transparent hover-dark-navy hover-bg-green',
  warning: 'b--yellow yellow bg-transparent hover-dark-navy hover-bg-yellow',
  danger: 'b--red red bg-transparent hover-dark-navy hover-bg-red',
  primary: 'b--blue blue bg-transparent white hover-bg-dark-blue',
  default: 'b--white white bg-transparent hover-dark-navy hover-bg-white'
}

const styleMap = (size) => {
  const classes = {
    'small': ['min-width: 140px;'],
    'large': ['line-height: 2rem;', 'min-width: 200px;'],
    'extra-large': ['min-width: 280px;']
  }

  return size === undefined ? classes['large'] : classes[size]
}

const Button = styled(({href, type='default', size='large', outline=false, children, className, onClick}) => {
    const btnClasses = outline ? outlineBtnClasses[type] : solidBtnClasses[type]
    const sizeClasses = sizedBtnClasses[size]

    return (
      <button href={href} className={`${commonClasses} ${btnClasses} ${sizeClasses} ${className}`} onClick={onClick}>
        {children}
      </button>
    )
})`${props => styleMap(props.size)}`

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(types),
  size: PropTypes.oneOf(sizes),
  outline: PropTypes.bool,
  children: PropTypes.string.isRequired
}

export default Button
