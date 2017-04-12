import React from 'react'
import {storiesOf} from '@kadira/storybook'
import DeviceWidth from '.'

storiesOf('DeviceWidth')
  .addWithInfo(
    'Info',
    'Used to get the current device width',
    () => (
      <DeviceWidth>
        {(screenSize) => <div>screenSize: {screenSize}</div>}
      </DeviceWidth>
    ),
  )
