import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {stringFixture} from '../../utils/fixtures'
import Tooltip from '.'

storiesOf('Tooltip')
  .addWithInfo(
    'Info',
    'Used to display related information in context',
    () => (
      <Tooltip>
        {stringFixture}
      </Tooltip>
    ),
  )
  .addWithPropsCombinations(
    'Combinations',
    Tooltip, 
    {
      children: [stringFixture],
    },
  )
