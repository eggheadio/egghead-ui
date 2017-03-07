import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {stringFixture} from '../../utils/fixtures'
import Error from './index'

storiesOf('Error')

  .addWithInfo('Default', () => (
    <Error>
      {stringFixture}
    </Error>
  ))
