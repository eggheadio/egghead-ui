import React, {PropTypes} from 'react'
import Heading from 'package/components/Heading'
import LessonOverviewsByGroup from 'package/components/LessonOverviewsByGroup'

const LessonsDirectory = ({lessonsUrl}) => (
  <div>
    <Heading level='5'>
      All Lessons
    </Heading>
    <LessonOverviewsByGroup lessonsUrl={lessonsUrl} />
  </div>
)

LessonsDirectory.propTypes = {
  lessonsUrl: PropTypes.string.isRequired,
}

export default LessonsDirectory
