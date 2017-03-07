import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {eventHandlerFixture, stringFixture, urlFixture} from '../../utils/fixtures'
import Button, {sizes, colors} from '.'

storiesOf('Button')
  .addWithInfo(
    'Info',
    'Used to encourage the user to take an action',
    () => (
      <Button>
        {stringFixture}
      </Button>
    ),
  )
  .addWithPropsCombinations(
    'Combinations',
    Button, 
    {
      children: [stringFixture],
      href: [urlFixture],
      onClick: [eventHandlerFixture],
      color: colors,
      size: sizes,
      outline: [true, false],
      pill: [true, false],
    },
  )
