import React from 'react'
import {storiesOf} from '@kadira/storybook'
import Icon, {types, sizes, colors} from '.'

storiesOf('Icon')
  .addWithInfo(
    'Info',
    'Used to give meaning to something in a small visual way',
    () => (
      <Icon type='add' />
    ),
  )
  .addWithPropsCombinations(
    'Combinations',
    Icon, 
    {
      type: types,
      size: sizes,
      color: colors,
    },
  )
