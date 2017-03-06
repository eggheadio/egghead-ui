import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {markdownFixture} from '../../utils/Fixtures'
import Markdown from '.'

storiesOf('Markdown')

  .addWithInfo('Default', () => (
    <Markdown>
      {markdownFixture}
    </Markdown>
  ))
