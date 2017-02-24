import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {stringFixture} from '../../utils/Fixtures'
import Paragraph, {types} from '.'

const decoratorClasses = 'bg-navy pa3 h-100 min-vh-100 gray'

storiesOf('Paragraph')

  .addDecorator((story) => (<div className={decoratorClasses}>{story()}</div>))

  .addWithPropsCombinations('Variations', Paragraph, {
    children: [stringFixture],
    type: types,
  })
