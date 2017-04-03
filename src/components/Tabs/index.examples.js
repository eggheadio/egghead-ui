import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {NodeFixture} from '../../utils/fixtures'
import Tabs from '.'

storiesOf('Tabs')
  .addWithInfo(
    'Info',
    'Used to display sections of components',
    () => (
      <Tabs groups={[
        {
          title: NodeFixture,
          component: NodeFixture
        },
        {
          title: NodeFixture,
          component: NodeFixture
        }
      ]}
      />
    )
  )

