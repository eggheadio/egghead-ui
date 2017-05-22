import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {map} from 'lodash'
import resourcesByType from '.'

const AllResources = () => (
  <main>
    {map(resourcesByType, (value, key) => {
      const resources = resourcesByType[key]
      return map(resources.items, (resource) => (
        resource.createExamples()
      ))
    })}
  </main>
)

it('renders on a server without crashing', () => {
  ReactDOMServer.renderToString(<AllResources />)
})
