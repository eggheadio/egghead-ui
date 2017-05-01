import React, {PropTypes} from 'react'
import {keys} from 'lodash'
import hexToRgba from 'hex-rgba'
import styled from 'styled-components'
import colors from 'package/utils/colors'
import colorValues from 'package/utils/colorValues'

const verticalPaddingBySize = {
  'small': {
    paddingTop: '8px',
    paddingBottom: '8px',
  },
  'medium': {
    paddingTop: '12px',
    paddingBottom: '12px',
  },
  'large': {
    paddingTop: '16px',
    paddingBottom: '16px',
  },
  'xlarge': {
    paddingTop: '20px',
    paddingBottom: '20px',
  },
}

export const sizes = keys(verticalPaddingBySize)

const StyledButton = styled.button`
  min-width: ${props => props.size === 'small' ? '0px' : '200px'};
  padding-left: ${props => props.size === 'small' ? '24px' : '36px'};
  padding-right: ${props => props.size === 'small' ? '24px' : '36px'};
  padding-top: ${props => verticalPaddingBySize[props.size].paddingTop};
  padding-bottom: ${props => verticalPaddingBySize[props.size].paddingBottom};
  transition: box-shadow 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    box-shadow: 0px 8px 12px 0px ${props =>
      hexToRgba(
        colorValues['base-secondary'], 
        props.overDark ? 70 : 20
      )};
  }
`

const Button = ({
  children,
  onClick,
  size,
  color,
  outline,
  overDark,
}) => (
  <StyledButton
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
    onClick={onClick}
    size={size}
    overDark={overDark}
  >
    {children}
  </StyledButton>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(sizes),
  color: PropTypes.oneOf(colors),
  outline: PropTypes.bool,
  overDark: PropTypes.bool,
}

Button.defaultProps = {
  size: 'medium',
  color: 'orange',
  outline: false,
  overDark: false,
}

export default Button
