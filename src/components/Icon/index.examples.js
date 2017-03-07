import React from 'react'
import {storiesOf} from '@kadira/storybook'
import Icon, {types, sizes, colors} from '.'

const propCombinations = {
  type: types,
  size: sizes,
  color: colors,
}

storiesOf('Icon')
  .addWithInfo(
    'Documentation',
    'Used to condense information into a small graphic',
    () => (
      <Icon type='add' />
    ),
  )
  .addWithPropsCombinations('Examples', Icon, propCombinations)
