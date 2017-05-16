import React from 'react'
import {map} from 'lodash'
import Icon, { types } from 'package/components/Icon'

const Icons = () => (
  <div className='flex flex-wrap'>
    {map(types, (type) => (
      <div 
        key={type}
        className='mr3 mb3 flex items-center'
      >
          {
            <div className='flex flex-column justify-center w5 h3 items-center mv3'>
              <Icon type={type} color='white-90' size='1' />
              <span className='mt2 f6 code'>{type}</span>
            </div>
          }
      </div>
    ))}
  </div>
)

export default Icons


