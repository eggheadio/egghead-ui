import React, {PropTypes} from 'react'
import RequestedLessons from 'package/components/RequestedLessons'

const NewLesson = ({
  instructor,
  lessonsUrl,
}) => (
  <div>
    <RequestedLessons 
      instructor={instructor} 
      lessonsUrl={lessonsUrl}
    />
  </div>
)

NewLesson.propTypes = {
  instructor: PropTypes.object.isRequired,
  lessonsUrl: PropTypes.string.isRequired,
}

export default NewLesson
