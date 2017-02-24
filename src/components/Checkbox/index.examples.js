import React from 'react'
import {storiesOf} from '@kadira/storybook'
import Checkbox from '.'

const decoratorClasses = 'flex flex-column content-center justify-around flex-wrap items-center vh-100 bg-navy'

storiesOf('Checkbox')
  .addDecorator((story) => (<div className={decoratorClasses}>{story()}</div>))
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

