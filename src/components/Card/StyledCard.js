import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { CourseMeta, CourseHeader } from './CourseCard'
import { LessonMeta, LessonHeader } from './LessonCard'
import { PlaylistMeta, PlaylistHeader } from './PlaylistCard'
import Playlist from '../Playlist/'
import { buildPlaylistMeta } from '../../utils/Playlist'
import { secondsToString } from '../../utils/Time'

const commonCardClasses = 'relative'
const commonInnerClasses = 'flex flex-column items-center bg-white navy relative z-1 br2'
const enhancedInnerClasses = `${commonInnerClasses} overflow-hidden pa4 pointer`
const footerClasses = 'flex justify-between self-stretch items-center' 
const pillClasses = 'f6 lh-title ttu fw6 ph3 pv1 br-pill tracked'
const orangePillClasses = `${pillClasses} orange bg-tag-orange`
const bluePillClasses = `${pillClasses} blue bg-tag-blue`
const greenPillClasses = `${pillClasses} dark-green bg-tag-turquoise tracked`
const titleHeadingClasses = 'f3 tc mt4 mb2 avenir fw5'
const instructorNameClasses = 'f6 dark-gray o-50 mb4 tc'

const cardStackedShadow = ['padding-bottom: 10px;']
const cardStackedShadowBACommon = [
  'content: \'\';',
  'position: absolute;',
  'display: block;',
  'height: 10px;',
  'border-radius: 5px;'
]
const cardStackedShadowBefore = [
  cardStackedShadowBACommon,
  'content: \'\';',
  'bottom: 5px;',
  'left: 9px;',
  'right: 9px;',
  'background: var(--gray);',
  'z-index: 1;'
]

const cardStackedShadowAfter = [
  'bottom: 0px;',
  'left: 18px;',
  'right: 18px;',
  'background: var(--dark-gray);',
  'z-index: 0;'
]

const cardTypes = {
  'course': {
    'cardStyles': [
      'max-width: 380px;',
      'box-sizing: border-box;'
    ],
    'cardClasses' : 'relative',
    'shadow': true,
    'innerStyles': `${enhancedInnerClasses}`,
    'innerClasses': 'flex flex-column items-center bg-white navy relative z-1 br2 overflow-hidden pa4 pointer',
    'pillClasses': `${orangePillClasses}`,
    'metaComponent': (response) => <CourseMeta meta={buildCardMeta('course', response)} />,
    'headerComponent': (response, expanded) => <CourseHeader response={response} expanded={expanded} />
  },
  'lesson': {
    'cardClasses': `${commonCardClasses} card-lesson`,
    'innerClasses': `${enhancedInnerClasses}`,
    'pillClasses': `${bluePillClasses}`,
    'metaComponent': (response) => <LessonMeta meta={buildCardMeta('lesson', response)} />,
    'headerComponent': (response, expanded) => <LessonHeader response={response} expanded={expanded} />
  },
  'playlist': {
    'cardClasses': `${commonCardClasses} card-stacked-shadow sans-serif card-playlist`,
    'innerClasses': `${commonInnerClasses}`,
    'pillClasses': `${greenPillClasses}`,
    'footerClasses': 'pb4 ph4',
    'metaComponent': (response) => <PlaylistMeta meta={buildCardMeta('playlist', response)} />,
    'headerComponent': (response, expanded) => <PlaylistHeader response={response} expanded={expanded} />
  }
}

const buildCardMeta = (type, response) => {
  if (type.toLowerCase() === 'course') {
    return {lessonCount: response.lesson_count}
  }

  if (type.toLowerCase() === 'lesson') {
    return {
      langImg: response.tech_logo_http_url,
      videoLength: secondsToString(response.duration)
      
    }
  }

  if (type.toLowerCase() === 'playlist') {
    return {
      timeRemaining: 'temp',
      lessonsLeft: response.lesson_count - response.completed_lesson_count,
      currentLesson: response.progress.current_lesson,
      playlist: buildPlaylistMeta(response.lessons, response.progress)
    }
  }
  
  return { meta: response }
}

const MaterialType = ({type}) => {
  return (
    <div className={cardTypes[type]['pillClasses']}>{type}</div> 
  )
}
MaterialType.propTypes = {
  type: PropTypes.string.isRequired
}

const expandedHorizontalClasses = [
  'max-width: 760px;' 
]

const CardHeader = ({response, type, expanded}) => {
  const headerComponent = cardTypes[type].headerComponent ? cardTypes[type].headerComponent(response, expanded) : null
  return (
    <div className='w-100'>
      {headerComponent}
    </div>
  )  
}
CardHeader.propTypes = {
  response: PropTypes.object,
  type: PropTypes.string.isRequired
}

const CardBody = ({title, instructor}) => {
  return (
    <div>
      <h3 className={titleHeadingClasses}>{title}</h3>
      <div className={instructorNameClasses}>{instructor}</div>
    </div>
  )
}
CardBody.propTypes = {
  title: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired
}

const CardFooter = ({response, type}) => {
  const metaComponent = cardTypes[type].metaComponent ? cardTypes[type].metaComponent(response) : null
  return (
    <div className={`${footerClasses} ${cardTypes[type]['footerClasses']}`}>
      {metaComponent}
      <MaterialType type={type} />
    </div>
  ) 
}
CardFooter.propTypes = {
  response: PropTypes.object,
  type: PropTypes.string.isRequired
}





/**
 *
 *    Styled Components
 *
 */


const StyledCardContainer = styled.div`
  ${props => cardTypes[props.type]['cardStyles']} 
  ${props => props.expanded === 'horizontal' ? `${expandedHorizontalClasses}` : ''}
  ${props => cardTypes[props.type]['shadow']
    ? `
        padding-bottom: 10px;
        &:before {
          content: '';
          position: absolute;
          display: block;
          height: 10px;
          border-radius: 5px;
          bottom: 5px;
          left: 9px;
          right: 9px;
          background: var(--gray);
          z-index: 1;
        }
      `
    : ''}
`

const StyledInnerCard = styled.div`
  ${props => props.expanded === 'vertical' ? 'br2 br--top' : ''},
  ${props => props.expanded === 'horizontal' ? 'br2 br--left max-height: 475px;' : ''}
`

const StyledExpansionContainer = styled.div`
  color: red;

`

const StyledExpansion = styled.div`
  color: red;
`


const StyledCard = ({type, expanded, response}) => {
  const { title, instructor: { full_name }, lessons, progress } = response

  return (
    <StyledCardContainer type={type} expanded={expanded}
      className={`${cardTypes[type]['cardClasses']} ${expanded === 'horizontal' ? 'flex' : ''}`}
    >
      <StyledInnerCard type={type} expanded={expanded} response={response}
        className={`${cardTypes[type]['innerClasses']}`}
      >
        <CardHeader type={type} response={response} expanded={expanded} />
        <CardBody title={title} instructor={full_name} />
        <CardFooter type={type} response={response} />
      </StyledInnerCard>
    </StyledCardContainer>
  )
} 


export default StyledCard