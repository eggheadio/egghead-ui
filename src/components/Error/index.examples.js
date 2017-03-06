import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {stringFixture} from '../../utils/Fixtures'
import Error from './index'

storiesOf('Error')

  .addWithInfo('Default', () => (
    <Error>
      {stringFixture}
    </Error>
  ))
