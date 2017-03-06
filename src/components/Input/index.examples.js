import React from 'react'
import {storiesOf} from '@kadira/storybook'
import Input from './index'
import PasswordTooltip from '../Tooltip/PasswordTooltip'

storiesOf('Input')

  .addWithInfo('Empty Field', () => (
    <Input />
  ))

  .addWithInfo('Field with Placeholder', () => (
    <Input placeholder='Placeholder' />
  ))

  .addWithInfo('Disabled Field', () => (
    <Input placeholder='Disabled' disabled />
  ))

  .addWithInfo('Field with Error', () => (
    <Input
      value='Error'
      required
      error
      errorMsg='Password must contain at least 8 characters.'
      icon='error'
    />
  ))

  .addWithInfo('Password Success Field', () => (
    <Input
      value='Password'
      required
      type='password'
      icon='success'
    />
  ))

  .addWithInfo('Password Field with Tooltip', () => (
    <div className='w-50 center'>
      <Input
        value='Password'
        required
        type='password'
        icon='success'
      />
      <PasswordTooltip />
    </div>
  ))

