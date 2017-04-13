import React from 'react'
import {Link} from 'react-router-dom'
import {Maybe, Heading} from 'egghead-ui'
import {detailsByLessonState} from 'utils/lessonStates'
import {minimumScreenWidth} from 'utils/hardCodedSizes'
import Image from 'components/Image'
import Avatar from 'components/Avatar'
import LessonActions from 'components/LessonActions'

export default ({lesson, requestCurrentPage}) => (
  <div className='flex flex-wrap justify-between'>

    <div 
      className='pa4 flex'
      style={{
        flex: `1 0 ${minimumScreenWidth}px`,
      }}
    >

      <Image 
        src={lesson.technology.logo_http_url}
        alt={lesson.technology.label}
        className='w2 h2 mr3'
      />

      <div>

        <div className='mb3 ttu b'>
          {detailsByLessonState[lesson.state].title || lesson.state}
        </div>

        <Link 
          to={`/lessons/${lesson.slug}`}
          className='no-underline base'
          style={{
            wordBreak: 'break-word',
          }}
        >
          <Heading level='3'>
            {lesson.title}
          </Heading>
        </Link>

        <Maybe condition={lesson.state !== 'requested'}>
          <div className='mt3'>
            <Link 
              to={`/instructors/${lesson.instructor.slug}`}
              className='no-underline dark-gray-secondary'
            >
              <div className='flex items-center'>
                <Avatar
                  name={lesson.instructor.full_name}
                  url={lesson.instructor.avatar_url}
                  size={2}
                />
                <div className='ml2'>
                  {lesson.instructor.full_name}
                </div>
              </div>
            </Link>
          </div>
        </Maybe>

      </div>

    </div>

    <div style={{
      flex: `1 0 ${minimumScreenWidth}px`,
    }}>
      <LessonActions 
        lesson={lesson} 
        requestCurrentPage={requestCurrentPage}
      />
    </div>

  </div>
)
