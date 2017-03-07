import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {markdownFixture} from '../../utils/fixtures'
import Markdown from '.'

storiesOf('Markdown')
  .addWithInfo(
    'Info',
    'Used to display markdown',
    () => (
      <Markdown>
        {markdownFixture}
      </Markdown>
    ),
  )
  .addWithPropsCombinations(
    'Combinations',
    Markdown, 
    {
      children: [markdownFixture],
    },
  )
