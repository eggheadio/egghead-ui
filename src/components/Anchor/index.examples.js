import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {stringFixture, urlFixture} from '../fixtures'
import Anchor, {types, colors} from '.'

storiesOf('Anchor')
  .addWithInfo(
    'Info',
    'Used to link to a url',
    () => (
      <Anchor url={urlFixture}>
        {stringFixture}
      </Anchor>
    ),
  )
  .addWithPropsCombinations(
    'Combinations',
    Anchor, 
    {
      children: [stringFixture],
      url: [urlFixture],
      isSeparateTab: [true, false],
      type: types,
      color: colors,
    },
  )
