import React, { PropTypes } from 'react';
import styled, { css } from 'styled-components'

/**

.card-play-btn {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.17);
  left: 50%;
  margin-left: -34px;
  display: flex;
  transition: 150ms;
}
.card-play-btn:before {
  position: relative;
  left: 3px;
}

 * */

const commonPlayBtnClasses = 'fa fa-play w3 h3 f3 absolute z-1 gray items-center justify-center br-pill pointer'
const hoverPlayBtnClasses = `${commonPlayBtnClasses} bg-white-70`
const playBtnClasses = `${commonPlayBtnClasses} hover-turquoise bg-white`

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
  ${props => props.hover ? 'opacity: 0;' : ''},

`

const PlayButton = ({ hover=false, className }) => {
    return <StyledPlayButton hover={hover} className={`${hover ? `${hoverPlayBtnClasses} card-play-btn` : playBtnClasses} ${className}`}/>
}

PlayButton.propTypes = {
  hover: PropTypes.bool  
}

export default PlayButton
