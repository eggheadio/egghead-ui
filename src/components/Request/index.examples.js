import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {apiFixture} from '../../utils/fixtures'
import Request from '.'

const ExampleDataRender = ({items}) => (
  <div>
    There are {items.length} items in the example data. See dev tools network tab.
  </div>
)

storiesOf('Request')
  .addWithInfo(
    'Info',
    'Used to send immediate or lazy http requests to endpoints with deafult loading spinner and error handling',
    () => (
      <Request url={apiFixture}>
        {({data}) => (
          <ExampleDataRender items={data} />
        )}
      </Request>
    ),
  )
  .add(
    'Combinations',
    () => (
      <div>
        <Request url={apiFixture}>
          {({data}) => (
            <ExampleDataRender items={data} />
          )}
        </Request>
        <Request url='/error'>
          {({data}) => (
            <ExampleDataRender items={data} />
          )}
        </Request>
        <Request
          lazy
          method='get'
          url={apiFixture}
        >
          {({request, data}) => data
            ? <ExampleDataRender items={data} />
            : <a onClick={() => request()}>
                Tap to request data
              </a>
          }
        </Request>
      </div>
    ),
  )
