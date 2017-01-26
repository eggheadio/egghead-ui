import React from 'react'
import {keys} from 'lodash'
import {storiesOf} from '@kadira/storybook'
import {ComponentFixture} from '../../utils/Fixtures'
import Well, {types} from '.'

storiesOf('Well', module)

  .addWithInfo('API', () => (
    <Well>
      <ComponentFixture />
    </Well>
  ))

  .addWithPropsCombinations('Combinations', Well, {
    type: keys(types),
    children: [<ComponentFixture />],
  })
