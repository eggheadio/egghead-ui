import React from 'react'
import {map, keys, compact} from 'lodash'
import {Text} from 'react-localize'
import {lessonStateVerbToPastTense, detailsByLessonState} from 'utils/lessonStates'
import Request from 'components/Request'
import LessonAction from './components/LessonAction'

const stateVerbs = keys(lessonStateVerbToPastTense)

export default ({lesson, requestLesson, requestCurrentPage}) => {

  const items = compact([

    lesson.upload_lesson_http_url
      ? <LessonAction
          actionText={lesson.wistia_id
            ? <Text message='lessonEdit.replaceVideo' />
            : <Text message='lessonEdit.uploadVideo' />
          }
          iconType='upload'
          color='blue'
          url={lesson.upload_lesson_http_url}
        />
      : null,

    lesson.edit_lesson_http_url
      ? <LessonAction
          actionText={<Text message='lessonEdit.edit' />}
          iconType='edit'
          color='orange'
          url={lesson.edit_lesson_http_url}
        />
      : null,

    ...map(stateVerbs, (stateVerb, index) => {
      const stateVerbUrl = lesson[`${stateVerb}_url`]
      return stateVerbUrl
        ? <Request
            lazy
            method='post'
            url={stateVerbUrl}
            onResponse={requestLesson || requestCurrentPage}
          >
            {({request}) => {
              const details = detailsByLessonState[lessonStateVerbToPastTense[stateVerb]]
              return (
                <LessonAction
                  actionText={details.action}
                  iconType={details.icon}
                  color={details.color}
                  onClick={() => request()}
                />
              )
            }}
          </Request>
        : null
    }),
  ])

  return (
    <div className='flex flex-wrap items-stretch h-100'>
      {map(items, (item, index) => (
        <div 
          key={index}
          className={`
            pv4 ph1 ph3-ns
            flex
            items-center
            justify-center
            ${index < items.length - 1 ? 'br b--gray-secondary' : ''}
          `}
          style={{
            flex: `1 0 115px`,
          }}
        >
          {item}
        </div>
      ))}
    </div>
  )
}
