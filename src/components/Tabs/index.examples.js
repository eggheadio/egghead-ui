import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {NodeFixture, StringFixture} from '../../utils/fixtures'
import Tabs from '.'

storiesOf('Tabs')
  .addWithInfo(
    'Info',
    'Used to display sections of components',
    () => (
      <Tabs groups={[
        {
          title: StringFixture,
          component: NodeFixture
        },
        {
          title: StringFixture,
          component: NodeFixture
        }
      ]}
      />
    )
  )

