import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {clickHandlerFixture} from '../../utils/Fixtures'
import Button from '.'

const standardButtonExamples = [
  {type: 'default', children: 'Default'},
  {type: 'primary', children: 'Primary'},
  {type: 'success', children: 'Success'},
  {type: 'warning', children: 'Warning'},
  {type: 'danger', children: 'Danger'}
]

// Standard Large Button (Default)
storiesOf('Button')
  .addWithInfo('Large (Default)',
    `The Large Default Button. Note: omitting 'type' will render the Default button.`,
    () => (
      <div>
        {standardButtonExamples.map((btn, i) => {
          return (
            <Button type={btn.type} onClick={clickHandlerFixture} key={i}>
              {btn.children}
            </Button>
          )
        })}
      </div>
    )
  )

// Small Button
storiesOf('Button')
  .addWithInfo('Small',
    `The Small Button. Note: omitting 'type' will render the Default button.`,
    () => (
      <div>
        {standardButtonExamples.map((btn, i) => {
          return (
            <Button type={btn.type.toLowerCase()} size='small' onClick={clickHandlerFixture} key={i}>
              {btn.type}
            </Button>
          )
        })}
      </div>
    )
  )

// Extra Large Button
storiesOf('Button')
  .addWithInfo('Extra Large', `The Extra Large Button is sized for callouts.`,
    () => (
      <div>
        {standardButtonExamples.map((btn, i) => {
          return (
            <Button type={btn.type.toLowerCase()} size='extra-large' onClick={clickHandlerFixture} key={i}>
              {btn.type}
            </Button>
          )
        })}
      </div>
    )
  )


// Outline Button
storiesOf('Button')
  .addWithInfo('Outline (All Sizes)', `The Outline Button is available in all sizes (pictured in Large).`, () => (
    <div>
      {standardButtonExamples.map((btn, i) => {
        return (
          <div className='mb2 mh2' key={i}>
            <Button type={btn.type.toLowerCase()} outline onClick={clickHandlerFixture} key={i}>
              {btn.type}
            </Button>
          </div>
        )
      })}
    </div>
  ))

