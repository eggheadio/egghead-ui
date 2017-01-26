import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {stringFixture, urlFixture} from '../../utils/Fixtures'
import Anchor from '.'

storiesOf('Anchor')
  .addWithInfo('API', () => (
    <Anchor url={urlFixture}>
      {stringFixture}
    </Anchor>
  ))
