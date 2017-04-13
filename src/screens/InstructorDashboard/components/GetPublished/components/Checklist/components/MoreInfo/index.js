import React from 'react'
import {Maybe, Icon} from 'egghead-ui'
import Anchor from 'components/Anchor'

export default ({url}) => (
  <Maybe condition={Boolean(url)}>
    <Anchor 
      url={url}
      isSeparateTab
    >
      <Icon 
        type='info' 
        size='4'
      />
    </Anchor>
  </Maybe>
)
