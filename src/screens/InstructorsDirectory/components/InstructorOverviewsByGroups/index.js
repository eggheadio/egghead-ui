import React from 'react'
import {filter, reject} from 'lodash'
import {Text} from 'react-localize'
import sortBy from 'sort-by'
import Tabs from 'components/Tabs'
import Request from 'components/Request'
import InstructorOverviews from './components/InstructorOverviews'

export default ({instructors}) => (
  <Request url='/api/v1/instructors'>
    {({data}) => (
      <Tabs groups={[
        {
          title: <Text message='instructorOverviewsByGroup.unpublished.title' />,
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
          title: <Text message='instructorOverviewsByGroup.published.title' />,
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
