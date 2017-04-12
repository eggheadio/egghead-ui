import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {stringFixture, imageUrlFixture} from '../fixtures'
import Image from '.'

storiesOf('Image')
  .addWithInfo(
    'Info',
    'Used to display an image',
    () => (
      <Image 
        src={imageUrlFixture}
        alt={stringFixture}
      />
    ),
  )
