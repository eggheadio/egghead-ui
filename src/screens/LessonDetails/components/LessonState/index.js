import React from 'react'
import {Paragraph} from 'egghead-ui'
import {detailsByLessonState} from 'utils/lessonStates'

export default ({lesson}) => {
  const statusColor = detailsByLessonState[lesson.state].color
  return (
    <div>
      <div className={`
        mb3 ttu tc pv2 ph3 br2 ba b--dashed dib
        ${statusColor} b--${statusColor}
      `}>
        {detailsByLessonState[lesson.state].title || lesson.state}
      </div>
      <Paragraph>
        {detailsByLessonState[lesson.state].description}
      </Paragraph>
    </div>
  )
}
