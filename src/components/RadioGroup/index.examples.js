import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {stringFixture} from '../../utils/fixtures'
import RadioGroup from '.'

const optionsExample = [
  {
    label: stringFixture,
    value: 'a',
  },
  {
    label: stringFixture,
    value: 'b',
  },
  {
    label: stringFixture,
    value: 'c',
    disabled: true,
  },
]

storiesOf('RadioGroup')
  .addWithInfo(
    'Info',
    'Used to let the user pick one option from a group of options',
    () => (
      <RadioGroup options={optionsExample} />
    ),
  )
  .addWithPropsCombinations(
    'Combinations',
    RadioGroup, 
    {
      options: [optionsExample],
    },
  )
