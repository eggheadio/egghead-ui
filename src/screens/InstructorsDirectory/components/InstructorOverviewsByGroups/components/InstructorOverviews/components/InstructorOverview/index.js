import React from 'react'
import {map} from 'lodash'
import {Link} from 'react-router-dom'
import Maybe from 'components/Maybe'  
import Heading from 'components/Heading'
import Avatar from 'components/Avatar'
import LessonGroupsStat from './components/LessonGroupsStat'

export default ({instructor}) => {

  const lessonOverviewsByGroupStats = [
    {
      label: 'In Progress',
      count: instructor.claimed_lessons,
    },
    {
      label: 'In Review',
      count: instructor.submitted_lessons,
    },
    {
      label: 'In Queue',
      count: instructor.approved_lessons,
    },
    {
      label: 'Published',
      count: instructor.published_lessons,
    },
  ]

  return (
    <div>

      <div className='flex items-center'>

        <div className='mr3'>
          <Avatar
            name={instructor.first_name}
            url={instructor.avatar_url}
          />
        </div>

        <Link to={`/instructors/${instructor.slug}`}>
          <Heading level='3'>
            {instructor.full_name}
          </Heading>
        </Link>

      </div>

      <section className='flex flex-wrap'>
        {map(lessonOverviewsByGroupStats, group => (
          <Maybe 
            key={group.label}
            condition={Boolean(group.count)}
          >
            <div className='mt3 mr3'>
              <LessonGroupsStat
                label={group.label}
                count={group.count}
              /> 
            </div>
          </Maybe>
        ))}
      </section>

    </div>
  )
}
