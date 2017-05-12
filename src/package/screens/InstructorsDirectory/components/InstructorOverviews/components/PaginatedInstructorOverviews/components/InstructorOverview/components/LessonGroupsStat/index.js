import React from 'react'
import Heading from 'package/components/Heading'

export default ({label, count}) => (
  <div className={`pv2 ph3 bg-gray-secondary br2 tc ${count > 0 ? '' : 'o-30'}`}>
    <Heading level='5'>
      {label}
    </Heading>
    <div className='f4'>
      {count}
    </div>
  </div>
)
