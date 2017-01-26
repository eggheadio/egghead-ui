import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {nameFixture, avatarImageUrlFixture} from '../../utils/Fixtures'
import Avatar from '.'

storiesOf('Avatar')
  .addWithInfo('API', () => (
    <Avatar
      name={nameFixture}
      url={avatarImageUrlFixture}
    />
  ))
