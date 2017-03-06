import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {apiFixture} from '../../utils/Fixtures'
import Request from './index'

storiesOf('Request')

  .addWithInfo('Automatic', () => (
    <Request url={apiFixture}>
      {({data}) => (
        <div>
          {JSON.stringify(data)}
        </div>
      )}
    </Request>
  ))

  .addWithInfo('Lazy', () => (
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
            Tap to request data from {apiFixture}
          </a>
      }
    </Request>
  ))
