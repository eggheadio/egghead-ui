import React, {PropTypes} from 'react'
import {login, logout} from 'utils/authentication'
import Heading from 'components/Heading'
import Anchor from 'components/Anchor'
import Request from 'components/Request'

const Authentication = ({children, loginUrl, userPermissionProperty}) => {
  
  const decodedToken = login()

  if(!decodedToken) {
    return (
      <div>
        <Heading level='3'>
          You need to log in to view this
        </Heading>
        <Anchor url={loginUrl}>
          Sign in via egghead
        </Anchor>
      </div>
    )
  }

  if(decodedToken && !decodedToken.user_url) {
    logout()
  }

  return (
    <Request url={`${process.env.REACT_APP_EGGHEAD_BASE_URL}/api/v1`}>
      {({data}) => children({data})}
    </Request>
  )
}

Authentication.propTypes = {
  children: PropTypes.func.isRequired,
  loginUrl: PropTypes.string.isRequired,
}

export default Authentication
