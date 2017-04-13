import React from 'react'
import {Heading} from 'egghead-ui'

export default ({label, count}) => (
  <div className='pv2 ph3 bg-gray-secondary br2 tc'>
    <Heading level='5'>
      {label}
    </Heading>
    <div className='f4'>
      {count}
    </div>
  </div>
)
