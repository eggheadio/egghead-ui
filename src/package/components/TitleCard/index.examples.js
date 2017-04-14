import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {stringFixture, NodeFixture} from 'utils/fixtures'
import TitleCard from '.'

storiesOf('TitleCard')
  .addWithInfo(
    'Info',
    'Used to show a card with a header',
    () => (
      <TitleCard title={stringFixture}>
        {NodeFixture}
      </TitleCard>
    ),
  )
  .addWithPropsCombinations(
    'Combinations',
    TitleCard, 
    {
      children: [NodeFixture],
      title: [stringFixture],
      description: [null, stringFixture],
      intro: [null, NodeFixture],
      subtle: [true, false],
    },
  )
