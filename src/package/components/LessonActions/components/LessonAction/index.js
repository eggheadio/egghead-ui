import React from 'react'
import ContainerWidth from 'package/components/ContainerWidth'
import Icon from 'package/components/Icon'

export default ({
  actionText, 
  iconType, 
  color, 
  url, 
  onClick,
}) => (
  <ContainerWidth>
    {(containerWidth) => (
      <a
        href={url}
        onClick={onClick}
        className='pa3 tc flex flex-wrap items-center justify-center h-100 dark-gray no-underline pointer dim'
    >
        <div className='pa2'>
          <Icon
            type={iconType}
            color={color}
          />
        </div>
        <div className='b f6 fw5'>
          {actionText}
        </div>
      </a>
    )}
  </ContainerWidth>
)
