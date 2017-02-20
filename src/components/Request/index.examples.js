import React from 'react'
import {map} from 'lodash'
import {storiesOf} from '@kadira/storybook'
import {apiFixture} from '../../utils/Fixtures'
import Request from './index'

const Comments = ({comments}) => (
  <div>
    {map(comments, (comment, index) => (
      <div
        key={index}
        className='pb3'
      >
        <div className='b'>
          By {comment.email}
        </div>
        <div className='gray'>
          {comment.body}
        </div>
      </div>
    ))}
  </div>
)

const decoratorClasses = 'mh-vh-100 bg-navy white pa3'

storiesOf('Request')
  .addDecorator((story) => (<div className={decoratorClasses}>{story()}</div>))

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
