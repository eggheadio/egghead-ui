import React from 'react'
import {map} from 'lodash'
import {storiesOf} from '@kadira/storybook'
import {apiFixture} from '../../utils/Fixtures'
import Request from './index'

const Comments = ({comments}) => (
  <div>
    {map(comments, (comment, index) => (
      <div key={index}>
        <div>By {comment.email}</div>
        <div>{comment.body}</div>
        <hr />
      </div>
    ))}
  </div>
)

storiesOf('Request')

  .addWithInfo('Automatic', () => (
    <Request url={apiFixture}>
      {({data}) => (
        <Comments comments={data} />
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
        ? <Comments comments={data} />
        : <a onClick={() => request()}>
            TAP TO VIEW COMMENTS
          </a>
      }
    </Request>
  ))
