import React from 'react'
import {storiesOf} from '@kadira/storybook'
import Tooltip from '.'
import PasswordTooltip from './PasswordTooltip'

const decoratorClasses = 'flex flex-column content-center justify-around flex-wrap items-center vh-100 bg-navy'

storiesOf('Tooltip')
  .addDecorator((story) => (<div className={decoratorClasses}>{story()}</div>))
  .addWithInfo('Tooltip', () => (
    <Tooltip>
      Cool Tooltip!
    </Tooltip>
  ))
storiesOf('Tooltip')
  .addDecorator((story) => (<div className={decoratorClasses}>{story()}</div>))
  .addWithInfo('Password Tooltip', () => (
    <div className='w-50 center'>
      <PasswordTooltip strength={50} />
    </div>
  ))
