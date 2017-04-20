import React from 'react'
import {map} from 'lodash'
import colors from 'package/utils/colors'

const Colors = () => (
  <div className='flex flex-wrap'>
    {map(colors, (color) => (
      <div 
        key={color}
        className='mr3 mb3 flex items-center'
        style={{
          minWidth: 225,
        }}
      >
        <div className={`bg-${color} w2 h2 mr2`} />
        <div>
          {color}
        </div>
      </div>
    ))}
  </div>
)

export default Colors
