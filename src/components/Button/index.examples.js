import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {clickHandlerFixture} from '../../utils/Fixtures'
import Button from '.'

const standardButtonExamples = [
  {type: 'default', children: 'Default'},
  {type: 'primary', children: 'Primary'},
  {type: 'success', children: 'Success'},
  {type: 'warning', children: 'Warning'},
  {type: 'danger', children: 'Danger'},
  {type: 'pill', children: 'Pill'}
]

const decoratorClasses = 'flex flex-column content-center justify-around flex-wrap items-center vh-100 bg-navy'
const btnDisp = 'flex flex-column justify-around items-center vh-100'

// Standard Large Button (Default)
storiesOf('Button')
  .addDecorator((story) => (<div className={decoratorClasses}>{story()}</div>))
  .addWithInfo('Large (Default)',
    `The Large Default Button. Note: omitting 'type' will render the Default button.`,
    () => (
      <div className={btnDisp}>
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
  .addDecorator((story) => (<div className={decoratorClasses}>{story()}</div>))
  .addWithInfo('Small',
    `The Small Button. Note: omitting 'type' will render the Default button.`,
    () => (
      <div className={btnDisp}>
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
  .addDecorator((story) => (<div className={decoratorClasses}>{story()}</div>))
  .addWithInfo('Extra Large', `The Extra Large Button is sized for callouts.`,
    () => (
      <div className={btnDisp}>
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
  .addDecorator((story) => (<div className={decoratorClasses}>{story()}</div>))
  .addWithInfo('Outline (All Sizes)', `The Outline Button is available in all sizes (pictured in Large).`, () => (
    <div className={btnDisp}>
      {standardButtonExamples.map((btn, i) => {
        return (
          <div className='mb2 mh2' key={i}>
            <Button type={btn.type.toLowerCase()} outline onClick={clickHandlerFixture} key={i}>
              {btn.type}
            </Button>
          </div>
        )
      })}

      <div className='mb2 mh2'>
        <Button type='pill' outline play>
          Play Course
        </Button>
      </div>

    </div>
  ))

