import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import PlayButton from '../Button/PlayButton'
import Card from './'
const expansions = ['vertical', 'horizontal']


const StyledPlayButton = styled(PlayButton)`
  ${props => props.hover ? `&:hover { opacity: 1; }` : ''}
`

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

export const CourseHeader = ({response, expanded}) => {
  return (
    <div className='flex flex-column items-center'>
      <StyledPlayButton hover type='course' expanded={expanded} />
      <div className='mw5 mt3 center ph3'>
        <img alt='' src={response.square_cover_url} />
      </div>
    </div>
  )
}
CourseHeader.propTypes = {
  response: PropTypes.object,
  expanded: PropTypes.oneOf(expansions)
}

const CourseCard = ({course, expanded}) => {
  const { title, instructor: { full_name } } = course
  return (
    <Card type='course' response={course} expanded={expanded} />
  )
}
CourseCard.propTypes = {
  course: PropTypes.object.isRequired,
  expanded: PropTypes.oneOf(expansions)
}

export default CourseCard
