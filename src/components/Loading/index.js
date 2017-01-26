import React from 'react'
import Icon from '../Icon'

const Loading = () => (
  <div className='mv3 gray'>
    <Icon
      type='refresh'
      size='2'
      spin
      className='mr2'
    />
    Loading...
  </div>
)

export default Loading
