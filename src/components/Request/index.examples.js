import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {apiFixture} from '../../utils/fixtures'
import Request from '.'

storiesOf('Request')
  .addWithInfo(
    'Info',
    'Used to send immediate or lazy http requests to endpoints with deafult loading spinner and error handling',
    () => (
      <Request url={apiFixture}>
        {({data}) => (
          <div>
            {JSON.stringify(data)}
          </div>
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
            <div>
              {JSON.stringify(data)}
            </div>
          )}
        </Request>
        <Request url='/error'>
          {({data}) => (
            <div>
              {JSON.stringify(data)}
            </div>
          )}
        </Request>
        <Request
          lazy
          method='get'
          url={apiFixture}
        >
          {({request, data}) => data
            ? <div>
                {JSON.stringify(data)}
              </div>
            : <a onClick={() => request()}>
                Tap to request data
              </a>
          }
        </Request>
      </div>
    ),
  )
