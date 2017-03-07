import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {stringFixture} from '../../utils/fixtures'
import Input, {types, icons} from '.'

storiesOf('Input')
  .addWithInfo(
    'Info',
    'Used to let the user enter information',
    () => (
      <Input />
    ),
  )
  .addWithPropsCombinations(
    'Combinations',
    Input, 
    {
      placeholder: [null, stringFixture],
      defaultValue: [null, stringFixture],
      errorMsg: [null, stringFixture],
      type: types,
      required: [true, false],
      disabled: [true, false],
      error: [true, false],
      icon: icons,
    },
  )
