import React, {PropTypes} from 'react'

const Error = ({children}) => (
  <div className='red'>
    {children}
  </div>
)

Error.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Error
