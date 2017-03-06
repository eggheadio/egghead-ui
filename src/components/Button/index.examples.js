import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {clickHandlerFixture} from '../../utils/Fixtures'
import Button from '.'

const standardButtonExamples = [
  {color: 'white', children: 'White'},
  {color: 'blue', children: 'Blue'},
  {color: 'green', children: 'Green'},
  {color: 'yellow', children: 'Yellow'},
  {color: 'red', children: 'Red'},
  {color: 'orange', children: 'Orange'},
  {color: 'turquoise', children: 'Turquoise'}
]

storiesOf('Button')

  .addWithInfo('Large (Default)',
    `The Large Default Button. Note: omitting 'type' will render the Default button.`,
    () => (
      <div>
        {standardButtonExamples.map((btn, i) => {
          return (
            <Button color={btn.color} onClick={clickHandlerFixture} key={i}>
              {btn.children}
            </Button>
          )
        })}
      </div>
    )
  )

  .addWithInfo('Small',
    `The Small Button. Note: omitting 'type' will render the Default button.`,
    () => (
      <div>
        {standardButtonExamples.map((btn, i) => {
          return (
            <Button color={btn.color.toLowerCase()} size='small' onClick={clickHandlerFixture} key={i}>
              {btn.color}
            </Button>
          )
        })}
      </div>
    )
  )

  .addWithInfo('Extra Small',
    `The Eaxtra Small Button. Note: omitting 'type' will render the Default button.`,
    () => (
      <div>
        {standardButtonExamples.map((btn, i) => {
          return (
            <Button type={btn.type.toLowerCase()} size='extra-small' onClick={clickHandlerFixture} key={i}>
              {btn.type}
            </Button>
          )
        })}
      </div>
    )
  )

  .addWithInfo('Extra Large', `The Extra Large Button is sized for callouts.`,
    () => (
      <div>
        {standardButtonExamples.map((btn, i) => {
          return (
            <Button color={btn.color.toLowerCase()} size='extra-large' onClick={clickHandlerFixture} key={i}>
              {btn.color}
            </Button>
          )
        })}
      </div>
    )
  )

  .addWithInfo('Outline (All Sizes)', `The Outline Button is available in all sizes (pictured in Large).`, () => (
    <div>
      {standardButtonExamples.map((btn, i) => {
        return (
          <div className='mb2 mh2' key={i}>
            <Button color={btn.color.toLowerCase()} outline onClick={clickHandlerFixture} key={i}>
              {btn.color}
            </Button>
          </div>
        )
      })}
    </div>
  ))

  .addWithInfo('Pill Outline (All Sizes)', `The Outline Button is available in all sizes (pictured in Large).`, () => (
    <div>
      {standardButtonExamples.map((btn, i) => {
        return (
          <div className='mb2 mh2' key={i}>
            <Button color={btn.color.toLowerCase()} pill outline onClick={clickHandlerFixture} key={i}>
              {btn.color}
            </Button>
          </div>
        )
      })}

      <div className='mb2 mh2'>
        <Button color='orange' pill outline play>
          Play Course
        </Button>
      </div>

    </div>
  ))
