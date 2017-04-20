import React, {PropTypes} from 'react'
import Maybe from 'package/components/Maybe'
import Icon from 'package/components/Icon'
import Anchor from 'package/components/Anchor'

const MoreInfo = ({url}) => (
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

MoreInfo.propTypes = {
  url: PropTypes.string.isRequired,
}

export default MoreInfo
