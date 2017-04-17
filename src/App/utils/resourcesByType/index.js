import React from 'react'
import {internet, lorem, random} from 'faker'
import colors from 'utils/colors'
import Authentication from '../../components/Authentication'

import Anchor, {types as anchorTypes} from 'components/Anchor'
import InstructorRevenue from 'components/InstructorRevenue'

const getLoginUrl = () => (
  `${process.env.REACT_APP_EGGHEAD_BASE_URL}/users/jwt?return_to=${window.location.href}`
)

export const resourcesByType = {

  components: {
    urlBase: '/components',
    items: {
      Anchor: {
        types: {
          'children*': 'string',
          'url*': 'string',
          'isSeparateTab': 'bool',
          'type': anchorTypes,
          'color': 'colors',
        },
        createExamples: () => [
          <Anchor url={internet.url()}>
            {lorem.words()}
          </Anchor>,
          <Anchor 
            url={internet.url()}
            type='prominent'
          >
            {lorem.words()}
          </Anchor>,
          <Anchor 
            url={internet.url()}
            color={random.arrayElement(colors)}
          >
            {lorem.words()}
          </Anchor>,
        ],
      },
      InstructorRevenue: {
        types: {
          'revenueUrl*': 'string',
        },
        createExamples: () => [
          <Authentication 
            loginUrl={getLoginUrl()}
            userPermissionProperty='instructor_url'
          >
            {({instructor}) => (
              <InstructorRevenue revenueUrl={instructor.revenue_url} />
            )}
          </Authentication>,
        ],
      },
    }
  },

  screens: {
    urlBase: '/screens',
  },

  utilities: {
    urlBase: '/utils',
  },
}

export default resourcesByType
