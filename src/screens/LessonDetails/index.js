import React from 'react'
import {map, compact} from 'lodash'
import {Markdown, Heading, List} from 'egghead-ui'
import {Text} from 'react-localize'
import Image from 'components/Image'
import TitleCard from 'components/TitleCard'
import LessonActions from 'components/LessonActions'
import Avatar from 'components/Avatar'
import LessonState from './components/LessonState'
import WistiaVideo from './components/WistiaVideo'

export default ({lesson, requestLesson}) => {

  const items = compact([
    {
      title: <Text message='lesson.video.title' />,
      children: (
        <WistiaVideo wistiaId={lesson.wistia_id} />
      ),
    },
    {
      title: <Text message='lesson.state' />,
      children: (
        <LessonState lesson={lesson} />
      ),
    },
    {
      title: <Text message='lesson.actions' />,
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
          title: <Text message='lesson.instructor' />,
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
      title: <Text message='lesson.technology' />,
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
      title: <Text message='lesson.summary' />,
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
