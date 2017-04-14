import React from 'react'
import {internet, lorem, random} from 'faker'
import colors from 'utils/colors'
import Anchor, {types as anchorTypes} from 'components/Anchor'

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
]

export const screenResources = [
]

export const utilityResources = [
]
