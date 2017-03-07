import React from 'react'
import {map} from 'lodash'
import {storiesOf} from '@kadira/storybook'
import {stringFixture} from '../../utils/fixtures'
import Heading, {levels} from '.'

map(levels, level => {
  storiesOf('Heading')
    .addWithInfo(`Level ${level}`, () => (
      <Heading level={level}>
        {stringFixture}
      </Heading>
    ))
})
