import React from 'react'
import {keys} from 'lodash'
import {storiesOf} from '@kadira/storybook'
import Input from './index'
import PasswordTooltip from '../Tooltip/PasswordTooltip'

const decoratorClasses = 'flex flex-column content-center justify-around flex-wrap items-center vh-100 bg-navy'

storiesOf('Input')
  .addDecorator((story) => (<div className={decoratorClasses}>{story()}</div>))
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

