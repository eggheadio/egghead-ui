import React from 'react'
import Anchor from 'components/Anchor'

export default ({label, value, href}) => (
  <div>
    <div className='b'>
      {label}
    </div>
    {href
      ? <Anchor url={href}>
          {value}
        </Anchor>
      : <div>
          {value}
        </div>
    }
  </div>
)
