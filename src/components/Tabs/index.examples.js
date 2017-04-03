import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {NodeFixture} from '../../utils/fixtures'
import Tabs from '.'
import Card from '../Card'

storiesOf('Tabs')
  .addWithInfo(
    'Info',
    'Used to display sections of components',
    () => (
      <Tabs groups={[
        {
          title: 'Tab 1',
          component: (
            <Card>
              {NodeFixture}
            </Card>
          )
        },
        {
          title: 'Tab 2',
          component: (
            <Card>
              {NodeFixture}
            </Card>
          )
        }
      ]}
      />
    )
  )

