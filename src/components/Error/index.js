import React, {PropTypes} from 'react'
import Icon from '../Icon'

const Error = ({children}) => (
  <div className='red b flex items-center'>
    <Icon
      type='warning' 
      color='red'
      size='4'
    />
    <span className='pl1'>
      {children}
    </span>
  </div>
)

Error.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Error
