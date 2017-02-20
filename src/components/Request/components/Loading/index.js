import React from 'react'
import Icon from '../../../Icon'

const Loading = () => (
  <div className='mv3 white'>
    <Icon
      type='refresh'
      size='2'
      spin
      className='mr2 pa3'
    />
    Loading...
  </div>
)

export default Loading
