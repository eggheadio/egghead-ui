import React, {PropTypes} from 'react'
import {map, keys, compact} from 'lodash'
import {lessonStateVerbToPastTense, detailsByLessonState} from 'package/utils/lessonStates'
import Request from 'package/components/Request'
import LessonAction from './components/LessonAction'

const stateVerbs = keys(lessonStateVerbToPastTense)

const LessonActions = ({
  lesson,
  requestLesson,
  requestCurrentPage,
}) => {

  const items = compact([

    lesson.upload_lesson_http_url
      ? <LessonAction
          actionText={lesson.wistia_id
            ? 'Replace Video'
            : 'Upload Video'
          }
          iconType='upload'
          color='blue'
          url={lesson.upload_lesson_http_url}
        />
      : null,

    lesson.edit_lesson_http_url
      ? <LessonAction
          actionText='Edit'
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
    <div className='flex flex-wrap items-stretch justify-end h-100'>
      {map(items, (item, index) => (
        <div 
          key={index}
          className={`
            flex
            items-center
            justify-center
            mw4
            bl b--gray-secondary
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

LessonActions.propTypes = {
  lesson: PropTypes.object.isRequired,
  requestLesson: PropTypes.func,
  requestCurrentPage: PropTypes.func,
}

export default LessonActions
