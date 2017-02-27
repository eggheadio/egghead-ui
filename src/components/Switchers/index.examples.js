import React from 'react'
import {storiesOf} from '@kadira/storybook'
import StaticSwitcher from '.'

const decoratorClasses = 'flex flex-column content-center justify-around flex-wrap items-center vh-100 bg-navy'

storiesOf('Static: Switchers')
  .addDecorator((story) => (<div className={decoratorClasses}>{story()}</div>))
  .addWithInfo('Big', () => (
    <StaticSwitcher />
  ))
  .addWithInfo('Small', () => (
    <StaticSwitcher />
  ))
