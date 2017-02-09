import React, { PropTypes } from 'react';

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

const commonPlayBtnClasses = 'fa fa-play w3 h3 f3 absolute z-1 gray items-center justify-center br-pill pointer card-play-btn'
const hoverPlayBtnClasses = `${commonPlayBtnClasses} bg-white-70 o-0`
const playBtnClasses = `${commonPlayBtnClasses} hover-turquoise bg-white`

const PlayButton = ({ hover=false }) => {
    return <div className={hover ? hoverPlayBtnClasses : playBtnClasses} />
}

PlayButton.propTypes = {
  hover: PropTypes.bool  
}

export default PlayButton
