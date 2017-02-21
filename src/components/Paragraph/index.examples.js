import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {stringFixture} from '../../utils/Fixtures'
import Paragraph, {types} from '.'

const decoratorClasses = 'min-vh-100 bg-navy'

storiesOf('Paragraph')

  .addDecorator((story) => (<div className={decoratorClasses}>{story()}</div>))

  .addWithInfo('Default', () => (
    <Paragraph>{stringFixture}</Paragraph>
  ))

  .addWithPropsCombinations('Variations', Paragraph, {
    children: [stringFixture],
    type: types,
  })
