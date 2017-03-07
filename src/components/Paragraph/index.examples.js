import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {stringFixture} from '../../utils/fixtures'
import Paragraph, {types} from '.'

storiesOf('Paragraph')
  .addWithInfo(
    'Info',
    'Used to display general text',
    () => (
      <Paragraph>
        {stringFixture}
      </Paragraph>
    ),
  )
  .addWithPropsCombinations(
    'Combinations',
    Paragraph, 
    {
      children: [stringFixture],
      type: types,
    },
  )
