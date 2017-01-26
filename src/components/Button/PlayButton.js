import React, { PropTypes } from 'react';

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
