import React from 'react'
import {internet, lorem, random} from 'faker'
import colors from 'utils/colors'
import Authentication from '../../components/Authentication'

import Anchor, {types as anchorTypes} from 'components/Anchor'
import InstructorRevenue from 'components/InstructorRevenue'

const getLoginUrl = () => (
  `https://egghead-io-staging.com/users/jwt?return_to=${window.location.href}`
)

export const componentResources = [
  {
    component: Anchor,
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
  {
    component: InstructorRevenue,
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
]

export const screenResources = [
]

export const utilityResources = [
]
