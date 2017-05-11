import React from 'react'
import {map} from 'lodash'
import {Link} from 'react-router-dom'
import Heading from 'package/components/Heading'
import Avatar from 'package/components/Avatar'
import LessonGroupsStat from './components/LessonGroupsStat'

export default ({instructor}) => {

  if(!instructor) {
    return null
  }

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
    <div className='pa4 flex flex-wrap items-center justify-between'>

      <Link
        to={`/instructors/${instructor.slug}`}
        className='pointer dim'
      >
        <div className='flex items-center mr3'>

          <div className='mr3'>
            <Avatar
              name={instructor.first_name}
              url={instructor.avatar_url}
            />
          </div>

          <Heading level='3'>
            {instructor.full_name}
          </Heading>

        </div>
      </Link>

      <section className='flex flex-wrap'>
        {map(lessonOverviewsByGroupStats, group => (
          <div 
            key={group.label}
            className='mt3 mr3'
          >
            <LessonGroupsStat
              label={group.label}
              count={group.count}
            /> 
          </div>
        ))}
      </section>

    </div>
  )
}
