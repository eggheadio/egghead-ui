import React from 'react'
import {storiesOf} from '@kadira/storybook'
import Tooltip from '.'
import PasswordTooltip from './PasswordTooltip'

storiesOf('Tooltip')

  .addWithInfo('Tooltip', () => (
    <Tooltip>
      Cool Tooltip!
    </Tooltip>
  ))

  .addWithInfo('Password Tooltip', () => (
    <div className='w-50 center'>
      <PasswordTooltip strength={50} />
    </div>
  ))
