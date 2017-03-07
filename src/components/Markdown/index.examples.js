import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {markdownFixture} from '../../utils/fixtures'
import Markdown from '.'

storiesOf('Markdown')

  .addWithInfo('Default', () => (
    <Markdown>
      {markdownFixture}
    </Markdown>
  ))
