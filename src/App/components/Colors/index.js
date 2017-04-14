import React from 'react'
import {map} from 'lodash'
import colors from 'utils/colors'

const Colors = () => (
  <div>
    {map(colors, (color) => (
      <div className='mb3 flex items-center'>
        <div className={`bg-${color} w2 h2 mr2`} />
        <div>
          {color}
        </div>
      </div>
    ))}
  </div>
)

export default Colors
