import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {NodeFixture, stringFixture} from 'utils/fixtures'
import Tabs from '.'

storiesOf('Tabs')
  .addWithInfo(
    'Info',
    'Used to display sections of components',
    () => (
      <Tabs groups={[
        {
          title: stringFixture,
          component: NodeFixture
        },
        {
          title: stringFixture,
          component: NodeFixture
        }
      ]}
      />
    )
  )

