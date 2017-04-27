import React from 'react'
import Icon from 'package/components/Icon'

export default ({
  actionText, 
  iconType, 
  color, 
  url, 
  onClick,
}) => (
  <a
    href={url}
    onClick={onClick}
    className='pa4 flex flex-column tc items-center dark-gray no-underline pointer dim'
  >
    <Icon
      type={iconType}
      color={color}
    />
    <div className='pt3 b'>
      {actionText}
    </div>
  </a>
)
