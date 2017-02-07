import React, { PropTypes } from 'react'
import PlayButton from '../Button/PlayButton'
import Playlist from '../Playlist/'
import Card from './'
import { buildPlaylistMeta } from '../../utils/Playlist'

export const PlaylistCard = ({response}) => {
  return (
    <Card type='playlist' response={response} />
  )
}
PlaylistCard.propTypes = {
  meta: PropTypes.object
}

export const PlaylistMeta = ({meta}) => {
  console.log('playlistmeta response', meta)
  const { playlist, lessonsLeft, currentLesson } = meta
  const currentLessonNum = playlist.indexOf(currentLesson)
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
          width: `${Math.round((currentLesson / lessonCount) * 100)}%`
        }} />
      </div>
    </div>
  )
}
PlaylistMeta.propTypes = {
  response: PropTypes.object
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
  console.log('playlistHeader response', response)
  const { lessons, progress, timeRemaining, lessonsLeft } = response
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
