import React from 'react'
import {Icon} from 'egghead-ui'

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
    className='flex flex-column tc items-center dark-gray no-underline'
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
