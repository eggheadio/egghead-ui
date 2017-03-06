import React from 'react'
import {storiesOf} from '@kadira/storybook'
import StaticFooter from '.'

storiesOf('Static: Footer')
  .addWithInfo('Default', () => (
    <StaticFooter />
  ))
