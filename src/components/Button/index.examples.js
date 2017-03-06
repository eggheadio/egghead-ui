import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {clickHandlerFixture, stringFixture, urlFixture} from '../../utils/Fixtures'
import Button, {sizes, colors} from '.'

const propCombinations = {
  href: [urlFixture],
  onClick: [clickHandlerFixture],
  color: colors,
  size: sizes,
  outline: [true, false],
  pill: [true, false],
  children: [stringFixture],
}

storiesOf('Button')
  .addWithInfo(
    'Documentation',
    'Used to encourage the user to take an action',
    () => (
      <Button>
        {stringFixture}
      </Button>
    ),
    {
      inline: true,
      header: false,
      source: false,
    },
  )
  .addWithPropsCombinations('Examples', Button, propCombinations)
