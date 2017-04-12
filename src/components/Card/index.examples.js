import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {NodeFixture} from '../fixtures'
import Card, {levels} from '.'

storiesOf('Card')
  .addWithInfo(
    'Info',
    'Used to display a collection of related components',
    () => (
      <Card>
        {NodeFixture}
      </Card>
    ),
  )
  .addWithPropsCombinations(
    'Combinations',
    Card, 
    {
      children: [NodeFixture],
      level: levels,
    },
  )
