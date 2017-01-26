import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {ComponentFixture} from '../../utils/Fixtures'
import Split from '.'

storiesOf('Split')
  .addWithInfo('API', () => (
    <Split
      title={<ComponentFixture />}
      main={<ComponentFixture />}
      aside={<ComponentFixture />}
    />
  ))
