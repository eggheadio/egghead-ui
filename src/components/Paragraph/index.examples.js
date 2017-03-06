import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {stringFixture} from '../../utils/Fixtures'
import Paragraph from '.'

storiesOf('Paragraph')

  .addWithInfo('Default', () => (
    <Paragraph>
      {stringFixture}
    </Paragraph>
  ))

  .addWithInfo('small', () => (
    <Paragraph type='small'>
      {stringFixture}
    </Paragraph>
  ))
