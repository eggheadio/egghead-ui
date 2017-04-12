import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {NodeFixture} from '../fixtures'
import Maybe from '.'

storiesOf('Maybe')
  .addWithInfo(
    'Info',
    'Used to conditionally render something',
    () => (
      <Maybe condition={true}>
        {NodeFixture}
      </Maybe>
    ),
  )
  .addWithPropsCombinations(
    'Combinations',
    Maybe, 
    {
      children: [NodeFixture],
      condition: [true, false],
    },
  )
