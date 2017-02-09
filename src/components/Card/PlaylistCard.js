import React, { PropTypes } from 'react'
import PlayButton from '../Button/PlayButton'
import Playlist from '../Playlist/'
import Card from './'
import { buildPlaylistMeta, findVidNumber, getTimeLeft } from '../../utils/Playlist'
import { secondsToString } from '../../utils/Time'

/**
 *
 .card-playlist .card-progress-list-item.viewed:before {
  border: 1px solid var(--turquoise);
  background: var(--turquoise);
}
.card-playlist .card-progress-list-item.viewed:after {
  border-color: var(--turquoise);
}
.card-playlist .card-progress-list-item.next:before {
  border-color: transparent transparent transparent var(--turquoise);
  box-shadow: 0 0 0 6px var(--tag-gray);
  background: var(--tag-gray);
}
.card-playlist .card-progress-list-item.next:hover:before {
  box-shadow: 0 0 0 6px var(--white);
  background: var(--white);
}
.card-playlist .card-play-btn {
  bottom: -2.5rem;
}
 * */

export const PlaylistCard = ({response}) => {
  return (
    <Card type='playlist' response={response} />
  )
}
PlaylistCard.propTypes = {
  meta: PropTypes.object
}

export const PlaylistMeta = ({meta}) => {
  const { playlist, lessonsLeft, currentLesson } = meta
  const currentLessonNum = findVidNumber(playlist, currentLesson)
  const lessonCount = playlist.length

  return (
    <div className='flex flex-column items-center'>
      <div className='f6 dark-gray o-50'>
        <span className='dark-green'>{currentLessonNum}</span>
        <span className='mh1'>/</span>
        <span>{lessonCount} {lessonCount === 1 ? 'lesson' : 'lessons'}</span>
      </div>
      <div className='w4 br1 bg-tag-turquoise mt1 overflow-hidden'>
        <div className='pt1 bg-turquoise' style={{
          width: `${Math.round((currentLessonNum / lessonCount) * 100)}%`
        }} />
      </div>
    </div>
  )
}
PlaylistMeta.propTypes = {
  meta: PropTypes.object
}

const PlaylistSummary = ({timeRemaining, lessonsLeft}) => {
  return (
    <div className='ph4 pt5'>
      <div className='tc f6 lh-title light-gray'>
        {`${timeRemaining} to go (${lessonsLeft} more ${lessonsLeft === 1 ? 'lesson' : 'lessons'})`}
      </div>
    </div>
  )
}
PlaylistSummary.propTypes = {
  timeRemaining: PropTypes.string.isRequired,
  lessonsLeft: PropTypes.number.isRequired
}

export const PlaylistHeader = ({response}) => {
  const { lessons, progress, duration } = response
  const lessonsLeft = lessons.length - progress.completed_lessons.length
  const timeRemaining = secondsToString(getTimeLeft(duration, progress))
  return (
    <div>
      <div className='relative w-100' style={{
        height: '290px'
      }}>
        <PlayButton />
        <Playlist playlist={buildPlaylistMeta(lessons, progress)} />
      </div>
      <PlaylistSummary timeRemaining={timeRemaining} lessonsLeft={lessonsLeft} />
    </div>
  )
}
PlaylistHeader.propTypes = {
  meta: PropTypes.object
}

export default PlaylistCard
