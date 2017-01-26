import React, {PropTypes} from 'react'

const Anchor = ({
  children,
  url,
}) => (
  <a
    href={url}
    target='_blank'
    className='blue'
  >
    {children}
  </a>
)

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
}

export default Anchor
