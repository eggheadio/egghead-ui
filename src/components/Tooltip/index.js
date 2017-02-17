import React, {PropTypes} from 'react'
import styled from 'styled-components'

const Tooltip = ({children, className}) => {
  const ttClasses = 'relative db br2 w-100 mt4 pa3 sans-serif navy bg-white eh-input-tooltip'  
  return (
    <div className={`${ttClasses} ${className}`}>
      {children}
    </div>
  )
}
Tooltip.propTypes = {
  children: React.PropTypes.node.isRequired
}

export default styled(Tooltip)`
  &:before {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 8px 9px 8px;
    border-color: transparent transparent #fff transparent;
    content: '';
    position: absolute;
    left: 20px;
    top: -9px;
  }
`
