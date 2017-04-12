import React from 'react'
import {storiesOf} from '@kadira/storybook'
import DeviceWidth from '.'

storiesOf('DeviceWidth')
  .addWithInfo(
    'Info',
    'Used to link to a url',
    () => (
      <DeviceWidth>
        {(screenSize) => <div>screenSize: {screenSize}</div>}
      </DeviceWidth>
    ),
  )
