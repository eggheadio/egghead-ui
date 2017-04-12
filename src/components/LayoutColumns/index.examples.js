import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {NodeFixture} from '../../utils/fixtures'
import LayoutColumns from '.'

storiesOf('LayoutColumns')
  .addWithInfo(
    'Info',
    'Used to create mobile first columns',
    () => (
      <LayoutColumns 
        items={[
          NodeFixture,
          NodeFixture,
          NodeFixture,
        ]}
      />
    ),
  )
  .addWithPropsCombinations(
    'Combinations',
    LayoutColumns, 
    {
      items: [[NodeFixture, NodeFixture]],
      relativeSizes: [
        null, 
        [1, 1], 
        [2, 1], 
        [3, 1], 
        [1, 2], 
        [1, 3], 
      ],
    },
  )
