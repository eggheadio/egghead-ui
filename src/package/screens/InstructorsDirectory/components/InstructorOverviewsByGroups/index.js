import React from 'react'
import {filter, reject} from 'lodash'
import sortBy from 'sort-by'
import Tabs from 'components/Tabs'
import Request from 'components/Request'
import InstructorOverviews from './components/InstructorOverviews'

export default ({instructors}) => (
  <Request url={`${process.env.REACT_APP_EGGHEAD_BASE_URL}/api/v1/instructors`}>
    {({data}) => (
      <Tabs groups={[
        {
          title: 'Unpublished',
          component: (
            <div className='mt3'>
              <InstructorOverviews
                instructors={filter(data, ['published_lessons', 0]).sort(sortBy(
                  '-submitted_lessons',
                  '-claimed_lessons',
                  '-approved_lessons',
                  '-id'
                ))}
              />
            </div>
          ),
        },
        {
          title: 'Published',
          component: (
            <div className='mt3'>
              <InstructorOverviews
                instructors={reject(data, ['published_lessons', 0]).sort(sortBy(
                  '-submitted_lessons',
                  '-claimed_lessons',
                  '-approved_lessons',
                  'published_lessons',
                  '-id'
                ))}
              />
            </div>
          ),
        },
      ]} />
    )}
  </Request>
)
