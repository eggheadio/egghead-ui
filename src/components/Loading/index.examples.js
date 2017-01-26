import React from 'react'
import {storiesOf} from '@kadira/storybook'
import Loading from '.'

storiesOf('Loading')
  .addWithInfo('API', () => (
    <Loading />
  ))
