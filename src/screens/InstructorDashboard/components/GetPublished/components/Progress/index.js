import React from 'react'
import {Text} from 'react-localize'

const barHeight = 7

export default ({total, complete}) => (
  <div>

    <div className='flex f6'>
      <div className='green mr1'>
        {complete}
      </div>
      <div className='mr1'>
        /
      </div>
      <div className='mr1'>
        {total} 
      </div>
      <div>
        <Text message='progress.completed' />
      </div>
    </div>

    <div className='mt2'>
      <div 
        className='br2 bg-gray-secondary'
        style={{
          height: barHeight,
        }}
      >
        <div 
          className='br2 bg-green'
          style={{
            height: barHeight,
            width: `${complete / total * 100}%`,
          }}
        />
      </div>
    </div>
  </div>
)
