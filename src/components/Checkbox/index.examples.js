import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {stringFixture, eventHandlerFixture} from '../../utils/fixtures'
import Checkbox from '.'

storiesOf('Checkbox')
  .addWithInfo(
    'Info',
    'Used to give the user a yes/no option',
    () => (
      <Checkbox
        name={stringFixture}
        label={stringFixture}
      />
    ),
  )
  .addWithPropsCombinations(
    'Combinations',
    Checkbox, 
    {
      name: [stringFixture],
      label: [stringFixture],
      onChange: [null, eventHandlerFixture],
      checked: [true, false],
      disabled: [true, false],
    },
  )
