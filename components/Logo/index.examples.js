import React from 'react'
import {storiesOf} from '@kadira/storybook'
import Logo from '.'

storiesOf('Logo')
  .addWithInfo('API', () => (
    <Logo />
  ))
