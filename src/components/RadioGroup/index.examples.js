import React from 'react'
import {storiesOf} from '@kadira/storybook'
import RadioGroup from './index'

storiesOf('Radio Group')

  .addWithInfo('Default', () => (
    <RadioGroup optionList={[
      {value: 'thing1', label: 'Radio One'},
      {value: 'thing2', label: 'Radio Two', checked: true},
      {value: 'thing3', label: 'Radio Three', disabled: true},
      {value: 'thing4', label: 'Radio Four', checked: true, disabled: true}
    ]} />
  ))
