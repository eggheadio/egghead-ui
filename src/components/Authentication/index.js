import React, {PropTypes} from 'react'
import {login, logout} from 'utils/authentication'
import {getLoginUrl} from 'utils/urls'
import Heading from 'components/Heading'
import Anchor from 'components/Anchor'
import Request from 'components/Request'

const Authentication = ({children, userPermissionProperty}) => {
  
  const decodedToken = login()

  if(!decodedToken) {
    return (
      <div>
        <Heading level='3'>
          You need to log in to view this
        </Heading>
        <Anchor url={getLoginUrl()}>
          Sign in via egghead
        </Anchor>
      </div>
    )
  }

  if(decodedToken && !decodedToken.user_url) {
    logout()
  }

  return (
    <Request url={decodedToken.user_url}>
      {({data}) => {

        const user = data

        if(user && !user[userPermissionProperty]) {
          return (
            <div>
              You need other permissions to access this
            </div>
          )
        }

        return (
          <Request url={user.instructor_url}>
            {({data}) => {
              const instructor = data
              return children({user, instructor})
            }}
          </Request>
        )
      }}
    </Request>
  )
}

Authentication.propTypes = {
  children: PropTypes.func.isRequired,
}

export default Authentication
