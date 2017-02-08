import React, { PropTypes } from 'react'
import { secondsToString } from '../../utils/Time'


const VideoLength = ({length}) => {
  return <div className='w3 ml3 tr o-60'>{length}</div>
}
VideoLength.propTypes = {
  length: PropTypes.string.isRequired
}

const VideoTitle = ({title}) => {
  return (
      <div className='truncate'>
        {title}
      </div>
  )
}
VideoTitle.propTypes = {
  title: PropTypes.string.isRequired
}

const CategoryIcon = ({icon}) => {
  return <img src={icon} className='ml2 mt1 h1' alt='' />
}

const PlaylistItem = ({item, extraClasses}) => {
  const { watched, current, icon_url, title, duration } = item
  const length = secondsToString(duration)
  const liClasses = 'flex items-start relative f6 lh-solid pointer pv3 pl4 pr3 gray hover-bg-white card-progress-list-item' 
  const textClasses = 'ml2 flex justify-between flex-grow-1 lh-copy overflow-hidden lesson-title'

  const watchedClasses = 'viewed o-60'
  const watchedTitleClasses = 'o-60'
  const currentClasses = 'next'

  return (
    <li className={`${liClasses} ${extraClasses} ${watched ? watchedClasses : ''} ${current ? currentClasses : ''}`}>
      <CategoryIcon icon={icon_url} />
      <div className={`${textClasses} ${watched ? watchedTitleClasses : ''}`}>
        <VideoTitle title={title} />
        <VideoLength length={length} />
      </div>
    </li>
  )
}
PlaylistItem.propTypes = {
  item: PropTypes.object.isRequired
}

const Playlist = ({playlist}) => {
  return (
    <div className='pr3 pt3 bg-tag-gray self-stretch h-100 br2 overflow-y-scroll'>
      <ul className='list pa0 ma0 overflow-hidden card-progress-list'>
        {playlist.map((i, k) => {
            const extraClasses = playlist[k+1] && playlist[k+1]['current'] ? 'pre-next' : null
            return (
              <a href={i.http_url} key={k} className='no-underline'>
                <PlaylistItem item={i} extraClasses={extraClasses}/>
              </a>
            )
          })
        
        }
      </ul>
    </div>
  )
}
Playlist.propTypes = {
  playlist: PropTypes.array.isRequired
}

export default Playlist
