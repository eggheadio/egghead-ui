import React from 'react'
import {storiesOf} from '@kadira/storybook'
import colors from 'utils/colors'
import {stringFixture} from 'utils/fixtures'
import {types as iconTypes} from 'components/Icon'
import IconLabel from '.'

storiesOf('IconLabel')
  .addWithInfo(
    'Info',
    'Used to display a label with an icon',
    () => (
      <IconLabel
        iconType='add'
        labelText={stringFixture}
      />
    ),
  )
  .addWithPropsCombinations(
    'Combinations',
    IconLabel, 
    {
      iconType: iconTypes, 
      labelText: [stringFixture],
      color: colors,
    },
  )
