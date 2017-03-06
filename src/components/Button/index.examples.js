import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {clickHandlerFixture} from '../../utils/Fixtures'
import Button from '.'

const buttonColors = [
  'White',
  'Blue',
  'Green',
  'Yellow',
  'Red',
  'Orange',
  'Turquoise',
]

storiesOf('Button')

  .addWithInfo('Large',
    () => (
      <div>
        {buttonColors.map((buttonColor, i) => {
          return (
            <Button color={buttonColor.toLowerCase()} onClick={clickHandlerFixture} key={i}>
              {buttonColor}
            </Button>
          )
        })}
      </div>
    )
  )

  .addWithInfo('Small',
    () => (
      <div>
        {buttonColors.map((buttonColor, i) => {
          return (
            <Button color={buttonColor.toLowerCase()} size='small' onClick={clickHandlerFixture} key={i}>
              {buttonColor}
            </Button>
          )
        })}
      </div>
    )
  )

  .addWithInfo('Extra Small',
    () => (
      <div>
        {buttonColors.map((buttonColor, i) => {
          return (
            <Button color={buttonColor.toLowerCase()} size='extra-small' onClick={clickHandlerFixture} key={i}>
              {buttonColor}
            </Button>
          )
        })}
      </div>
    )
  )

  .addWithInfo('Extra Large',
    `The Extra Large Button is sized for callouts.`,
      () => (
        <div>
          {buttonColors.map((buttonColor, i) => {
            return (
              <Button color={buttonColor.toLowerCase()} size='extra-large' onClick={clickHandlerFixture} key={i}>
                {buttonColor}
              </Button>
            )
          })}
        </div>
      )
    )

  .addWithInfo('Outline', 
    `The Outline Button is available in all sizes (pictured in Large).`,
    () => (
      <div>
        {buttonColors.map((buttonColor, i) => {
          return (
            <div className='mb2 mh2' key={i}>
              <Button color={buttonColor.toLowerCase()} outline onClick={clickHandlerFixture} key={i}>
                {buttonColor}
              </Button>
            </div>
          )
        })}
      </div>
    ))

  .addWithInfo('Pill Outline (All Sizes)',
    `The Outline Button is available in all sizes (pictured in Large).`,
    () => (
      <div>
        {buttonColors.map((buttonColor, i) => {
          return (
            <div className='mb2 mh2' key={i}>
              <Button color={buttonColor.toLowerCase()} pill outline onClick={clickHandlerFixture} key={i}>
                {buttonColor}
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
