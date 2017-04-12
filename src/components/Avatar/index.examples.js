import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {nameFixture, avatarImageUrlFixture} from '../fixtures'
import Avatar, {sizes} from '.'

storiesOf('Avatar')
  .addWithInfo(
    'Info',
    'Used to display user avatars',
    () => (
      <Avatar
        name={nameFixture}
        url={avatarImageUrlFixture}
      />
    ),
  )
  .addWithPropsCombinations(
    'Combinations',
    Avatar, 
    {
      name: [nameFixture],
      url: [avatarImageUrlFixture],
      size: sizes,
    },
  )
