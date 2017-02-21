import React, { PropTypes } from 'react';
import styled, { css } from 'styled-components'
import expansions from '../../utils/expansions'


const commonPlayBtnClasses = 'fa fa-play w3 h3 f3 absolute z-1 gray items-center justify-center br-pill pointer grow-large'
const hoverPlayBtnClasses = `${commonPlayBtnClasses} bg-white-70 hover-bg-white`
const playBtnClasses = `${commonPlayBtnClasses} bg-white`

const hoverColorClasses = {
  course: 'hover-orange',
  lesson: 'hover-blue',
  playlist: 'hover-turquoise'
}

const centerButtonRules = [
  'top: 50%; margin-top: -2rem;'
]

const StyledPlayButton = styled.div`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.17);
  left: 50%;
  margin-left: -34px;
  display: flex;
  transition: 150ms;
  &:before {
    position: relative;
    left: 3px;
  }
  ${props => props.hover ? 'opacity: 0;' : ''}
  ${props => 
    props.type === 'lesson' ||
    (props.type === 'course' && (!props.expanded || props.expanded === 'horizontal'))
     ? `${centerButtonRules}`
     : ''
   }
`

const PlayButton = ({ hover=false, type, expanded, className }) => {
  return <StyledPlayButton hover={hover}
            type={type}
            expanded={expanded}
            className={`${hover
                          ? `${hoverPlayBtnClasses} ${hoverColorClasses[type] ? hoverColorClasses[type] : ''} card-play-btn`
                          : playBtnClasses
                         }
                        ${type === 'playlist' ? `${hoverColorClasses[type]}` : ''}
                        ${type === 'course' && expanded === 'vertical' ? 'bottom-1' : ''}
                        ${className}`
                      }
         />
}

PlayButton.propTypes = {
  hover: PropTypes.bool,
  type: PropTypes.string,
  expanded: PropTypes.oneOf(expansions)
}

export default PlayButton
