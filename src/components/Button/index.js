import React, { PropTypes } from 'react'
import styled from 'styled-components'
import Icon from '../Icon'

const commonClasses = 'link dib f5 fw6 tracked tc br2 ttu ba pointer'

const sizes = ['large', 'small', 'extra-large']
const types = ['success', 'warning', 'danger', 'primary', 'default', 'orange', 'turquoise']

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
  default: 'b--white bg-white dark-navy hover-bg-light-gray',
  orange: 'b--orange bg-orange bw1 navy',
  turquoise: 'b--turquoise bg-turquoise bw1 navy'
}

const outlineBtnClasses = {
  success: 'b--green green bg-transparent hover-dark-navy hover-bg-green',
  warning: 'b--yellow yellow bg-transparent hover-dark-navy hover-bg-yellow',
  danger: 'b--red red bg-transparent hover-dark-navy hover-bg-red',
  primary: 'b--blue blue bg-transparent white hover-bg-dark-blue',
  default: 'b--white white bg-transparent hover-dark-navy hover-bg-white',
  orange: 'b--orange orange bg-transparent hover-dark-navy hover-bg-orange bw1',
  turquoise: 'b--turquoise turquoise bg-transparent hover-dark-navy hover-bg-turquoise bw1'
}

const styleMap = (size) => {
  const classes = {
    'small': ['min-width: 140px;'],
    'large': ['line-height: 2rem;', 'min-width: 200px;'],
    'extra-large': ['min-width: 280px;']
  }

  return size === undefined ? classes['large'] : classes[size]
}

const Button = styled(({href, type = 'default', size = 'large', outline = false, children, className, pill = false, play = false, onClick}) => {
  const btnClasses = outline ? outlineBtnClasses[type] : solidBtnClasses[type]
  const sizeClasses = sizedBtnClasses[size]

  return (
    <button href={href} className={`${commonClasses} ${btnClasses} ${sizeClasses} ${className} ${pill ? 'br-pill' : ''}`} onClick={onClick}>
      {play ? <Icon type='play' className='mr2' /> : ''} {children}
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
