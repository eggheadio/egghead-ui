import React, {PropTypes} from 'react'
import {map, compact} from 'lodash'
import Markdown from 'components/Markdown'
import Heading from 'components/Heading'
import List from 'components/List'
import Image from 'components/Image'
import TitleCard from 'components/TitleCard'
import LessonActions from 'components/LessonActions'
import Avatar from 'components/Avatar'
import LessonState from './components/LessonState'
import WistiaVideo from './components/WistiaVideo'

const LessonDetails = ({lesson, requestLesson}) => {

  const items = compact([
    {
      title: 'Video',
      children: (
        <WistiaVideo wistiaId={lesson.wistia_id} />
      ),
    },
    {
      title: 'State',
      children: (
        <LessonState lesson={lesson} />
      ),
    },
    {
      title: 'Actions',
      children: (
        <LessonActions 
          lesson={lesson} 
          requestLesson={requestLesson}
        />
      ),
    },
    lesson.state === 'requested' 
      ? null
      : {
          title: 'Instructor',
          children: (
            <div className='flex items-center'>
              <Avatar
                name={lesson.instructor.first_name}
                url={lesson.instructor.avatar_url}
              />
              <div className='ml3'>
                {lesson.instructor.full_name}
              </div>
            </div>
          ),
      },
    {
      title: 'Technology',
      children: (
        <div className='flex items-center'>
          <Image
            src={lesson.technology.logo_http_url}
            alt={lesson.technology.label}
            className='mw3 mr3'
          />
          {lesson.technology.label}
        </div>
      ),
    },
    {
      title: 'Summary',
      children: (
        <Markdown>
          {lesson.summary}
        </Markdown>
      ),
    },
  ])

  return (
    <TitleCard title={lesson.title}>
      <List items={map(items, (item, index) => (
        <div>
          <Heading level='4'>
            {item.title}
          </Heading>
          <div>
            {item.children}
          </div>
        </div>
      ))} />
    </TitleCard>
  )
}

LessonDetails.propTypes = {
  lesson: PropTypes.object.isRequired,
  requestLesson: PropTypes.func.isRequired,
}

export default LessonDetails
