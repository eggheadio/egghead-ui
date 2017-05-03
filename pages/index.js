import React from 'react'
import {map} from 'lodash'
import resourcesByType from '../src/App/utils/resourcesByType'

export default () => (
  <main>
    {map(resourcesByType, (value, key) => {
      const resources = resourcesByType[key]
      return map(resources.items, (resource) => (
        resource.createExamples()
      ))
    })}
  </main>
)
