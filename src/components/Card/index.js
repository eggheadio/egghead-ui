import React, {PropTypes} from 'react'
import { keys } from 'lodash'
import { CourseMeta, CourseHeader } from './CourseCard'
import { LessonMeta, LessonHeader } from './LessonCard'
import { PlaylistMeta, PlaylistHeader } from './PlaylistCard'
import Playlist from '../Playlist/'
import { buildPlaylistMeta } from '../../utils/Playlist'
import { secondsToString } from '../../utils/Time'

/**

*,
*:before,
*:after {
  box-sizing: border-box;
}

.card-course,
.card-lesson,
.card-playlist {
  max-width: 380px;
}
.card-course.expanded-horizontal {
  max-width: 760px;
}
.card-stacked-shadow {
  padding-bottom: 10px;
}
.card-stacked-shadow:before,
.card-stacked-shadow:after {
  content: '';
  position: absolute;
  display: block;
  height: 10px;
  border-radius: 5px;
}
.card-stacked-shadow:before {
  bottom: 5px;
  left: 9px;
  right: 9px;
  background: var(--gray);
  z-index: 1;
}
.card-stacked-shadow:after {
  bottom: 0px;
  left: 18px;
  right: 18px;
  background: var(--dark-gray);
  z-index: 0;
}


.card-progress-list-item {
  transition: 150ms;
}
.card-progress-list-item:before,
.card-progress-list-item:after {
  content: '';
  position: absolute;
  transition: 150ms;
}
.card-progress-list-item:before {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  border: 1px solid var(--light-gray);
  background: var(--tag-gray);
  box-shadow: 0 0 0 1px var(--tag-gray);
  left: 20px;
  top: 22px;
  z-index: 2;
}
.card-progress-list-item:hover:before {
  background: var(--white);
  box-shadow: 0 0 0 1px var(--white);
}
.card-progress-list-item.viewed {
  color: var(--gray);
}
.card-progress-list-item.viewed:before {
  border: 1px solid var(--orange);
  background: var(--orange);
}
.card-progress-list-item:after {
  width: 1px;
  height: 100%;
  border-width: 0 0 0 1px;
  border-style: solid;
  border-color: var(--light-gray);
  left: 24px;
  top: 32px;
  z-index: 1;
}
.card-progress-list-item.viewed:after {
  border-color: var(--orange);
}
.card-progress-list-item.pre-next:after {
  border-style: dashed;
}
.card-progress-list-item.next:before {
  left: 21px;
  border-radius: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 0px 6px 9px;
  border-color: transparent transparent transparent var(--orange);
}
 * */

const commonCardClasses = 'relative card'
const commonInnerClasses = 'flex flex-column items-center bg-white navy relative z-1 card-course-inner br2'
const enhancedInnerClasses = `${commonInnerClasses} overflow-hidden pa4 pointer`
const footerClasses = 'flex justify-between self-stretch items-center' 
const pillClasses = 'f6 lh-title ttu fw6 ph3 pv1 br-pill tracked'
const orangePillClasses = `${pillClasses} orange bg-tag-orange`
const bluePillClasses = `${pillClasses} blue bg-tag-blue`
const greenPillClasses = `${pillClasses} dark-green bg-tag-turquoise tracked`

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

const cardTypes = {
  'course': {
    'cardClasses': `${commonCardClasses} card-stacked-shadow card-course`,
    'innerClasses': `${enhancedInnerClasses}`,
    'pillClasses': `${orangePillClasses}`,
    'metaComponent': (response) => <CourseMeta meta={buildCardMeta('course', response)} />,
    'headerComponent': (response) => <CourseHeader response={response} />
  },
  'lesson': {
    'cardClasses': `${commonCardClasses} card-lesson`,
    'innerClasses': `${enhancedInnerClasses}`,
    'pillClasses': `${bluePillClasses}`,
    'metaComponent': (response) => <LessonMeta meta={buildCardMeta('lesson', response)} />,
    'headerComponent': (response) => <LessonHeader response={response} />
  },
  'playlist': {
    'cardClasses': `${commonCardClasses} card-stacked-shadow sans-serif card-playlist`,
    'innerClasses': `${commonInnerClasses}`,
    'pillClasses': `${greenPillClasses}`,
    'footerClasses': 'pb4 ph4',
    'metaComponent': (response) => <PlaylistMeta meta={buildCardMeta('playlist', response)} />,
    'headerComponent': (response) => <PlaylistHeader response={response} />
  }
}

const titleHeadingClasses = 'f3 tc mt4 mb2 avenir fw5'
const instructorNameClasses = 'f6 dark-gray o-50 mb4 tc'

const MaterialType = ({type}) => {
  return (
    <div className={cardTypes[type]['pillClasses']}>{type}</div> 
  )
}
MaterialType.propTypes = {
  type: PropTypes.string.isRequired
}

const CardHeader = ({response, type}) => {
  const headerComponent = cardTypes[type].headerComponent ? cardTypes[type].headerComponent(response) : null
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

const Card = ({type, expanded, response}) => {
  const { title, instructor: { full_name }, lessons, progress } = response
  const cardPlaylist = buildPlaylistMeta(lessons, progress)
  const extendedClasses = 'relative w-100 z-1 overflow-hidden pv3 bg-tag-gray br2'
  return (
    <div className={`${cardTypes[type]['cardClasses']} ${expanded === 'horizontal' ? 'flex expanded-horizontal' : ''}`}> 
      <div className={`${cardTypes[type]['innerClasses']} ${!expanded ? 'br2' : ''} ${expanded === 'vertical' ? 'br2 br--top' : ''} ${expanded === 'horizontal' ? 'br2 br--left' : ''}`}
        style={expanded === 'horizontal' ? {maxHeight: '475px'} : {}}
      >
        <CardHeader type={type} response={response} />
        <CardBody title={title} instructor={full_name} />
        <CardFooter type={type} response={response} />
      </div>
      <div className={`${expanded === 'vertical' ? `${extendedClasses} br--bottom` : ''} ${expanded === 'horizontal' ? `${extendedClasses} br--right` : ''}`}
        style={{height: 'auto', maxHeight: '475px'}}
      >
        { expanded === 'vertical'
          ? (
            <div style={{height: '290px'}}>
              <Playlist playlist={cardPlaylist} />
            </div>
          )
          : null
        }
        { expanded === 'horizontal' ? <Playlist playlist={cardPlaylist} /> : null }
      </div>
    </div>
  )
}
Card.propTypes = {
  type: PropTypes.oneOf(keys(cardTypes)),
  response: PropTypes.object
}

export default Card
