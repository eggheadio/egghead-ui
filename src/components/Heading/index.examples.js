import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {stringFixture} from '../../utils/fixtures'
import Heading, {levels} from '.'

storiesOf('Heading')
  .addWithInfo(
    'Info',
    'Used to separate sections of content',
    () => (
      <Heading level={1}>
        {stringFixture}
      </Heading>
    ),
  )
  .addWithPropsCombinations(
    'Combinations',
    Heading, 
    {
      children: [stringFixture],
      level: levels,
    },
  )
