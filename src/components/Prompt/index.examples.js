import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {stringFixture, urlFixture} from '../../utils/fixtures'
import Prompt from '.'

storiesOf('Prompt')
  .addWithInfo(
    'Info',
    'Used to link the user to another screen or url to take further action',
    () => (
      <Prompt
        description={stringFixture}
        actionText={stringFixture}
        action={urlFixture}
      />
    ),
  )
