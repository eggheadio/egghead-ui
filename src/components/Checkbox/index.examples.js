import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {stringFixture, eventHandlerFixture} from '../../utils/fixtures'
import Checkbox from '.'

storiesOf('Checkbox')
  .addWithInfo(
    'Documentation',
    'Used to give the user a yes/no option',
    () => (
      <Checkbox
        name={stringFixture}
        label={stringFixture}
      />
    ),
    {
      inline: true,
      header: false,
      source: false,
    },
  )
  .addWithPropsCombinations(
    'Prop Combinations',
    Checkbox, 
    {
      name: [stringFixture],
      label: [stringFixture],
      checked: [true, false],
      disabled: [true, false],
      onChange: [eventHandlerFixture],
      onClick: [eventHandlerFixture],
    },
  )
