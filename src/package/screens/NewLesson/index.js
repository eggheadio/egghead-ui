import React, {PropTypes} from 'react'
import RequestedLessons from 'components/RequestedLessons'

const NewLesson = ({instructor}) => (
  <div>
    <RequestedLessons instructor={instructor} />
  </div>
)

NewLesson.propTypes = {
  instructor: PropTypes.object.isRequired,
}

export default NewLesson
