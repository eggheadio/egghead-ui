import React from 'react'
import {storiesOf} from '@kadira/storybook'
import Button from 'components/Button'
import Open from '.'

storiesOf('Open')
  .addWithInfo(
    'Info',
    'Used to toggle details',
    () => (
      <Open>
        {({isOpen, handleOpenToggleClick}) => (
          <div>
            <div>isOpen: {`${isOpen}`}</div>
            <Button onClick={handleOpenToggleClick}>
              Example to tap
            </Button>
          </div>
        )}
      </Open>
    ),
  )
