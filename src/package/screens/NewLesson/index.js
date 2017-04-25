import React, {PropTypes} from 'react'
import RequestedLessons from 'package/components/RequestedLessons'

const NewLesson = ({
  instructor,
  lessonsUrl,
  technologiesUrl,
}) => (
  <div>
    <RequestedLessons 
      instructor={instructor} 
      lessonsUrl={lessonsUrl}
      technologiesUrl={technologiesUrl}
    />
  </div>
)

NewLesson.propTypes = {
  instructor: PropTypes.object.isRequired,
  lessonsUrl: PropTypes.string.isRequired,
}

export default NewLesson
