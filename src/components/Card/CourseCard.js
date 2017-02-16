import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import PlayButton from '../Button/PlayButton'
import Card from './StyledCard'
import { expansions } from './'


const StyledPlayButton = styled(PlayButton)`
  top: 50%;
  margin-top: -2rem;
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
    <div>
      <StyledPlayButton hover type='course' epanded={expanded} />
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
