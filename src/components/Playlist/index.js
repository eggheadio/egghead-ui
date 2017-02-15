import React, { PropTypes } from 'react'
import styled from 'styled-components'
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

const StyledPlaylistItem = styled.li`
	&:before, &:after {
		content: '';
		position: absolute;
		transition: 150ms;
	}
	&:before {
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
	&:after {
		width: 1px;
		height: 100%;
		border-width: 0 0 0 1px;
		border-style: solid;
		border-color: var(--light-gray);
		left: 24px;
		top: 32px;
		z-index: 1;
	}
	&:hover:before {
		background: var(--white);
		box-shadow: 0 0 0 1px var(--white);
	}
	&.viewed {
		color: var(--gray);
	}
  &.viewed:before {
    border: 1px solid ${props => props.card === 'playlist' ? 'var(--turquoise)' : 'var(--orange)'};
    background: ${props => props.card === 'playlist' ? 'var(--turquoise)' : 'var(--orange)'};
  }
  &.viewed:after {
    border-color: ${props => props.card === 'playlist' ? 'var(--turquoise)' : 'var(--orange)'};
  }
	&.pre-next:after {
		border-style dashed;
	}
  &.next:before {
		left: 21px;
		border-radius: 0;
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 6px 0px 6px 9px;
		border-color: transparent transparent transparent ${props => props.card ? 'var(--turquoise)' : 'var(--orange)'};
    box-shadow: 0 0 0 6px var(--tag-gray);
    background: var(--tag-gray);
  }
  &.next:hover:before {
    box-shadow: 0 0 0 6px var(--white);
    background: var(--white);
  }
`
const PlaylistItem = ({item, extraClasses, card=false}) => {
  const { watched, current, icon_url, title, duration } = item
  const length = secondsToString(duration)
  const liClasses = 'flex items-start relative f6 lh-solid pointer pv3 pl4 pr3 gray hover-bg-white card-progress-list-item' 
  const textClasses = 'ml2 flex justify-between flex-grow-1 lh-copy overflow-hidden lesson-title'

  const watchedClasses = 'viewed o-60'
  const watchedTitleClasses = 'o-60'
  const currentClasses = 'next'

  return (
    <StyledPlaylistItem className={`${liClasses} ${extraClasses} ${watched ? watchedClasses : ''} ${current ? currentClasses : ''}`} card={card} >
      <CategoryIcon icon={icon_url} />
      <div className={`${textClasses} ${watched ? watchedTitleClasses : ''}`}>
        <VideoTitle title={title} />
        <VideoLength length={length} />
      </div>
    </StyledPlaylistItem>
  )
}
PlaylistItem.propTypes = {
  item: PropTypes.object.isRequired
}

const Playlist = ({playlist, card=false}) => {
	console.log('plCard prop', card)
  return (
    <div className='pr3 pt3 bg-tag-gray self-stretch h-100 br2 overflow-y-scroll'>
      <ul className='list pa0 ma0 overflow-hidden card-progress-list'>
        {playlist.map((i, k) => {
            const extraClasses = playlist[k+1] && playlist[k+1]['current'] ? 'pre-next' : ''
            return (
              <a href={i.http_url} key={k} className='no-underline'>
                <PlaylistItem item={i} extraClasses={extraClasses} card={card} />
              </a>
            )
          })
        
        }
      </ul>
    </div>
  )
}
Playlist.propTypes = {
  playlist: PropTypes.array.isRequired,
	card: PropTypes.string
}

export default Playlist
