import React from 'react'
import Maybe from 'components/Maybe'
import Icon from 'components/Icon'
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
