import React from 'react'
import {Link} from 'react-router-dom'
import {detailsByLessonState} from 'package/utils/lessonStates'
import {xsmallContainerWidth} from 'package/utils/hardCodedSizes'
import Maybe from 'package/components/Maybe'
import Heading from 'package/components/Heading'
import Image from 'package/components/Image'
import Avatar from 'package/components/Avatar'
import LessonActions from 'package/components/LessonActions'

export default ({lesson, requestCurrentPage}) => (
  <div className='flex flex-wrap justify-between'>

    <div 
      className='pa4 flex'
      style={{
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: xsmallContainerWidth - 100,
      }}
    >

      <Image 
        src={lesson.technology.logo_http_url}
        alt={lesson.technology.label}
        className='w2 h2 mr3'
      />

      <div className='w-100'>

        <div className='mb3 ttu b'>
          {detailsByLessonState[lesson.state].title || lesson.state}
        </div>

        <Link 
          to={`/lessons/${lesson.slug}`}
          className='db pointer dim no-underline base'
        >
          <Heading level='3'>
            {lesson.title}
          </Heading>
        </Link>

        <Maybe condition={lesson.state !== 'requested'}>
          <div className='mt3'>
            <Link 
              to={`/instructors/${lesson.instructor.slug}`}
              className='pointer dim no-underline dark-gray-secondary'
            >
              <div className='flex items-center'>
                <Avatar
                  name={lesson.instructor.full_name}
                  url={lesson.instructor.avatar_url}
                  size='2'
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
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: xsmallContainerWidth - 100,
    }}>
      <LessonActions 
        lesson={lesson} 
        requestCurrentPage={requestCurrentPage}
      />
    </div>

  </div>
)
