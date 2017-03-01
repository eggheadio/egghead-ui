import React from 'react'
import {storiesOf} from '@kadira/storybook'
import Switcher from '.'

const decoratorClasses = 'flex flex-column content-center justify-around flex-wrap items-center vh-100 bg-navy'

storiesOf('Switchers')
  .addDecorator((story) => (<div className={decoratorClasses}>{story()}</div>))
  .addWithInfo('Switcher', () => (
    <Switcher leftOption={'This'} rightOption={'That'}  selectedItem='right' />
  ))

