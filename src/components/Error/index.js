import React, {PropTypes} from 'react'

const Error = ({children}) => (
  <div className='red b'>
    {children}
  </div>
)

Error.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Error
