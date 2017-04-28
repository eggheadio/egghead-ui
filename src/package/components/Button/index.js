import React, {PropTypes} from 'react'
import {keys} from 'lodash'
import colors from 'package/utils/colors'

const styleNonSmallShared = {
  minWidth: 200,
  paddingLeft: 36,
  paddingRight: 36,
}

const styleBySize = {
  'small': {
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 8,
    paddingBottom: 8,
  },
  'medium': {
    ...styleNonSmallShared,
    paddingTop: 12,
    paddingBottom: 12,
  },
  'large': {
    ...styleNonSmallShared,
    paddingTop: 16,
    paddingBottom: 16,
  },
  'xlarge': {
    ...styleNonSmallShared,
    paddingTop: 20,
    paddingBottom: 20,
  },
}

export const sizes = keys(styleBySize)

const Button = ({
  children,
  href,
  onClick,
  size,
  color,
  outline,
}) => (
  <button
    className={`
      flex items-center justify-center 
      f6 fw6 ttu b 
      ba br-pill 
      pointer
      b--${color}
      ${outline
        ? `bg-transparent ${color}` 
        : `bg-${color} white`
      }
    `}
    style={styleBySize[size]}
    href={href}
    onClick={onClick}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(sizes),
  color: PropTypes.oneOf(colors),
  outline: PropTypes.bool,
}

Button.defaultProps = {
  size: 'medium',
  color: 'orange',
  outline: false,
}

export default Button
