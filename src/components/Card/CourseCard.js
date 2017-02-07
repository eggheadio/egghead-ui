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

export const CourseHeader = ({response}) => {
  return (
    <div>
      <PlayButton hover />
      <div className='mw5 mt3 center ph3'>
        <img alt='' src={response.square_cover_url} />
      </div>
    </div>
  )
}
CourseHeader.propTypes = {
  response: PropTypes.object
}

const CourseCard = ({response, expanded=false}) => {
  const { title, instructor: { full_name } } = response
  return (
    <Card type='course' response={response} expanded={expanded} />
  )
}
CourseCard.propTypes = {
  response: PropTypes.object.isRequired,
  expanded: PropTypes.oneOf(expansions)
}

export default CourseCard
