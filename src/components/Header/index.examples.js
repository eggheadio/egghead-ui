import React from 'react'
import {storiesOf} from '@kadira/storybook'
import StaticHeader from '.'

storiesOf('Static: Header')
  .addWithInfo('API', () => (
    <StaticHeader />
  ))
