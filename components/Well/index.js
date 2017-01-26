import React, {PropTypes} from 'react'
import {keys} from 'lodash'

export const types = {
  info: 'bg-light-blue',
  error: 'bg-light-red',
}

const Well = ({
  children,
  type,
}) => (
  <div className={`pa3 br2 ${types[type]}`}>
    {children}
  </div>
)

Well.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(keys(types)),
}

Well.defaultProps = {
  type: 'info',
}

export default Well
