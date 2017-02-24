import React, { PropTypes } from 'react'
import styled from 'styled-components'
import PlayButton from '../Button/PlayButton'
import Card from '../../Card'


const StyledPlayButton = styled(PlayButton)`
  top: 50%;
  margin-top: -2rem;
  ${props => props.hover ? `&:hover { opacity: 1; }` : ''}
`

export const LessonMeta = ({meta}) => {
  return (
    <div className='flex items-center gray'>
      <img src={meta.langImg} className='w2' alt='' />
      <i className='fa fa-clock-o o-60 f5 ml3' />
      <div className='w3 ml2 o-60 f6'>{meta.videoLength}</div>
    </div>
  )
}
LessonMeta.propTypes = {
  meta: PropTypes.object
}

export const LessonHeader = ({meta}) => {
  return <StyledPlayButton hover type='lesson' />
}
LessonHeader.propTypes = {
  meta: PropTypes.object
}

const LessonCard = ({lesson}) => {
  return (
    <Card type='lesson' response={lesson} />
  )
}
LessonCard.propTypes = {
  lesson: PropTypes.object
}

export default LessonCard
