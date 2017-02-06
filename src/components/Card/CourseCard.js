import React, { PropTypes } from 'react'
import PlayButton from '../Button/PlayButton'
import Card from './'

const expansions = [false, 'horizontal', 'vertical']

export const CourseMeta = ({meta}) => {
  return (
    <div className='f6 dark-gray o-50'>
      {meta.lessonCount} {meta.lessonCount === 1 ? 'lesson' : 'lessons'}
    </div>
  )
}
CourseMeta.propTypes = {
  meta: PropTypes.object
}

export const CourseHeader = ({meta}) => {
  return (
    <div>
      <PlayButton hover />
      <div className='mw5 mt3 center ph3'>
        <img alt='' src={meta.courseImg} />
      </div>
    </div>
  )
}
CourseHeader.propTypes = {
  meta: PropTypes.object
}


const CourseCard = ({response, expanded=false}) => {
  const { title, instructor: { full_name } } = response
  return (
    <Card title={title} instructor={full_name} type='course' expanded={expanded} {...response} />
  )
}
CourseCard.propTypes = {
  response: PropTypes.object.isRequired,
  expanded: PropTypes.oneOf(expansions)
}

export default CourseCard
