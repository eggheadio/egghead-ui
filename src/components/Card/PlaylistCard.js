import React, { PropTypes } from 'react'
import PlayButton from '../Button/PlayButton'
import Playlist from '../Playlist/'
import Card from './StyledCard'
import styled from 'styled-components'
import { buildPlaylistMeta, findVidNumber, getTimeLeft } from '../../utils/Playlist'
import { secondsToString } from '../../utils/Time'
import { expansions } from './'


export const PlaylistCard = ({playlist}) => {
  return (
    <Card type='playlist' response={playlist} />
  )
}
PlaylistCard.propTypes = {
  playlist: PropTypes.object
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

const StyledPlaylistHeader = styled.div`
  height: 290px;
  .card-play-btn {
    bottom: -2.5rem
  }
`

export const PlaylistHeader = ({response, expanded}) => {
  const { lessons, progress, duration } = response
  const lessonsLeft = lessons.length - progress.completed_lessons.length
  const timeRemaining = secondsToString(getTimeLeft(duration, progress))
  return (
    <div className='w-100'>
      <StyledPlaylistHeader className='relative w-100 flex flex-column items-center'>
        <PlayButton type='playlist' className='card-play-btn' />
        <Playlist playlist={buildPlaylistMeta(lessons, progress)} card='playlist' />
      </StyledPlaylistHeader>
      <PlaylistSummary timeRemaining={timeRemaining} lessonsLeft={lessonsLeft} />
    </div>
  )
}
PlaylistHeader.propTypes = {
  meta: PropTypes.object,
  expanded: PropTypes.oneOf([false, 'horizontal', 'vertical'])
}

export default PlaylistCard
