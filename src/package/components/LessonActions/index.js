import React, {PropTypes} from 'react'
import {map, keys, compact} from 'lodash'
import {lessonStateVerbToPastTense, detailsByLessonState} from 'package/utils/lessonStates'
import Request from 'package/components/Request'
import ViewportWidth from 'package/components/ViewportWidth'
import ContainerWidth from 'package/components/ContainerWidth'
import LessonAction from './components/LessonAction'

const stateVerbs = keys(lessonStateVerbToPastTense)

const LessonActions = ({
  lesson,
  requestLesson,
  requestCurrentPage,
}) => {

  const getItems = (isLikelyDesktop) => compact([

    isLikelyDesktop && lesson.upload_lesson_http_url
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
    <ViewportWidth>
      {(isLikelyDesktop) => (
        <ContainerWidth className='h-100'>
          {(containerWidth) => (
            <div className={`
              h-100
              ${containerWidth === 'xsmall'
                ? ''
                : 'flex flex-wrap justify-end'
              }
            `}>
              {map(getItems(isLikelyDesktop), (item, index) => (
                <div 
                  key={index}
                  className={`
                    flex
                    items-center
                    ${containerWidth === 'xsmall'
                      ? index === 0 ? '' : 'bt b--gray-secondary'
                      : index === 0 ? '' : 'bl b--gray-secondary justify-center'
                    }
                  `}
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    flexBasis: 90,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </ContainerWidth>
      )}
    </ViewportWidth>
  )
}

LessonActions.propTypes = {
  lesson: PropTypes.object.isRequired,
  requestLesson: PropTypes.func,
  requestCurrentPage: PropTypes.func,
}

export default LessonActions
