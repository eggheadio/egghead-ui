import React, {PropTypes} from 'react'

const Avatar = ({
  name,
  url,
}) => (
  <img
    alt={`Avatar for ${name}`}
    src={url}
    className='br-100'
  />
)

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default Avatar
