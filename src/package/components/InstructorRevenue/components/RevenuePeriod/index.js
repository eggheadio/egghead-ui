import React from 'react'
import numberFormattingByType from 'package/utils/numberFormattingByType'

export default ({title, revenue, subscriberMinutes}) => (
  <div>
    <div className='f6 ttu mb2 dark-gray-secondary'>
      {title}
    </div>
    <div className='green b f3 mb2'>
      {numberFormattingByType.money(revenue)}
    </div>
    <div className='b'>
      {`${numberFormattingByType.general(subscriberMinutes)} minutes`}
    </div>
  </div>
)
