import React from 'react'
import {storiesOf} from '@kadira/storybook'
import RadioGroup from './index'

const decoratorClasses = 'flex flex-column content-center justify-around flex-wrap items-center vh-100 bg-navy'

storiesOf('Radio Group')
  .addDecorator((story) => (<div className={decoratorClasses}>{story()}</div>))
  .addWithInfo('Radio Group', () => (
    <RadioGroup optionList={[
        {value: 'thing1', label: 'Radio One'},
        {value: 'thing2', label: 'Radio Two', checked: true},
        {value: 'thing3', label: 'Radio Three', disabled: true},
        {value: 'thing4', label: 'Radio Four', checked: true, disabled: true}
      ]} 
    />
  ))


