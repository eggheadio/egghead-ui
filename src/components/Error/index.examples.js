import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {stringFixture} from '../fixtures'
import Error from '.'

storiesOf('Error')
  .addWithInfo(
    'Info',
    'Used to show the user an error message',
    () => (
      <Error>
        {stringFixture}
      </Error>
    ),
  )
  .addWithPropsCombinations(
    'Combinations',
    Error, 
    {
      children: [stringFixture],
    },
  )
