import React, { PropTypes } from 'react'
import styled from 'styled-components'

const commonClasses = 'link dib f5 fw6 tracked tc br2 ttu ba pointer'

const sizes = ['large', 'small', 'extra-large']
const types = ['success', 'warning', 'danger', 'primary', 'default']

const sizedBtnClasses = {
  'large': 'h3 pa3',
  'small': 'h2 lh-solid pa3',
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
  success: 'b--green green hover-dark-navy hover-bg-green',
  warning: 'b--yellow yellow hover-dark-navy hover-bg-yellow',
  danger: 'b--red red hover-dark-navy hover-bg-red',
  primary: 'b--blue blue white hover-bg-dark-blue',
  default: 'b--white white hover-dark-navy hover-bg-white'
}

const styleMap = (size) => {
  const classes = {
    'large': ['line-height: 2rem;', 'min-width: 200px;'],
    'small': ['min-width: 140px;', 'height: 3rem;'],
    'extra-large': ['min-width: 280px;', 'height: 5rem;']
  }

  return size === undefined ? classes['large'] : classes[size]
}

const Button = styled(({href, type='default', size='large', outline=false, children, className}) => {
    const btnClasses = outline ? outlineBtnClasses[type] : solidBtnClasses[type]
    const sizeClasses = sizedBtnClasses[size]

    return (
      <a href={href} className={`${commonClasses} ${btnClasses} ${sizeClasses} ${className}`}>
        {children}
      </a>
    )
})`${props => styleMap(props.size)}`

Button.propTypes = {
  href: PropTypes.string,
  type: PropTypes.oneOf(types),
  size: PropTypes.oneOf(sizes),
  outline: PropTypes.bool,
  children: PropTypes.string.isRequired
}

export default Button
