import React from 'react'
import {storiesOf} from '@kadira/storybook'
import Checkbox from '.'

storiesOf('Checkbox')

  .addWithInfo('Unchecked', () => (
    <Checkbox label='Checkbox' />
  ))

  .addWithInfo('Checked', () => (
    <Checkbox label='Checkbox' checked />
  ))

  .addWithInfo('Unchecked (Disabled)', () => (
    <Checkbox label='Checkbox' disabled />
  ))

  .addWithInfo('Checked (Disabled)', () => (
    <Checkbox label='Checkbox' checked disabled />
  ))

