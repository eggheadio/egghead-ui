import React, {PropTypes} from 'react'

const Tooltip = ({children}) => {
  const ttClasses = 'relative db br2 w-100 mt4 pa3 sans-serif navy bg-white eh-input-tooltip'  
  return (
    <div className={ttClasses}>
      {children}
    </div>
  )
}
Tooltip.propTypes = {
  children: React.PropTypes.node.isRequired
}

export default Tooltip
