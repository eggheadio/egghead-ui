import React from 'react'
import {storiesOf} from '@kadira/storybook'
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
              <h1>Tab Content 1</h1>
            </Card>
          )
        },
        {
          title: 'Tab 2',
          component: (
            <Card>
              <h1>Tab Content 2</h1>
            </Card>
          )
        }
      ]}
      />
    )
  )

