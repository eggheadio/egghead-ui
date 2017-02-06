import React, { PropTypes } from 'react'
import PlayButton from '../Button/PlayButton'
import Playlist from '../Playlist/'
import Card from './'

export const PlaylistCard = ({title, instructor, meta}) => {
  return (
    <Card title={title} instructor={instructor} type='playlist' meta={meta} />
  )
}
PlaylistCard.propTypes = {
  title: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  meta: PropTypes.object
}

export const PlaylistMeta = ({meta}) => {
  return (
    <div className='flex flex-column items-center'>
      <div className='f6 dark-gray o-50'>
        <span className='dark-green'>{meta.currentLesson}</span>
        <span className='mh1'>/</span>
        <span>{meta.lessonCount} {meta.lessonCount === 1 ? 'lesson' : 'lessons'}</span>
      </div>
      <div className='w4 br1 bg-tag-turquoise mt1 overflow-hidden'>
        <div className='pt1 bg-turquoise' style={{
          width: `${Math.round((meta.currentLesson / meta.lessonCount) * 100)}%`
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

export const PlaylistHeader = ({meta}) => {
  const { timeRemaining, lessonsLeft } = meta
  return (
    <div>
      <div className='relative w-100' style={{
        height: '290px'
      }}>
        <PlayButton />
        <Playlist playlist={meta.playlist} />
      </div>
      <PlaylistSummary timeRemaining={timeRemaining} lessonsLeft={lessonsLeft} />
    </div>
  )
}
PlaylistHeader.propTypes = {
  meta: PropTypes.object
}

export default PlaylistCard
