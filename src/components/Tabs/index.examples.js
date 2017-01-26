import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {stringFixture, ComponentFixture} from '../../utils/Fixtures'
import Tabs from '.'

storiesOf('Tabs')
  .addWithInfo('API', () => (
    <Tabs groups={[
      {
        title: stringFixture,
        component: <ComponentFixture />,
      },
      {
        title: stringFixture,
        component: <ComponentFixture />,
      },
    ]} />
  ))
