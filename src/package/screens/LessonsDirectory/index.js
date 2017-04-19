import React, {PropTypes} from 'react'
import Heading from 'components/Heading'
import LessonOverviewsByGroup from 'components/LessonOverviewsByGroup'

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
