import React from 'react'
import {storiesOf} from '@kadira/storybook'
import Switcher from '.'

storiesOf('Switchers')

  .addWithInfo('Switcher', () => (
    <Switcher leftOption={'This'} rightOption={'That'}  selectedItem='right' />
  ))
