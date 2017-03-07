import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {eventHandlerFixture, stringFixture} from '../../utils/fixtures'
import Toggle, {selectedItems} from '.'

storiesOf('Toggle')
  .addWithInfo(
    'Info',
    'Used to let the user pick one option from two possible options',
    () => (
      <Toggle
        leftOption={stringFixture}
        rightOption={stringFixture}
      />
    ),
  )
  .addWithPropsCombinations(
    'Combinations',
    Toggle, 
    {
      leftOption: [stringFixture],
      rightOption: [stringFixture],
      onClick: [null, eventHandlerFixture],
      selectedItem: selectedItems,
    },
  )
