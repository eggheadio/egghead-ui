import React, {PropTypes} from 'react'
import Maybe from 'package/components/Maybe'
import Heading from 'package/components/Heading'
import LessonOverviewsByGroup from 'package/components/LessonOverviewsByGroup'

const InstructorLessons = ({instructor}) => (
  <Maybe condition={Boolean(instructor)}>
    <div>
      <Heading level='5'>
        {`${instructor.first_name}'s Lessons`}
      </Heading>
      <LessonOverviewsByGroup 
        lessonsUrl={instructor.lessons_url}
        instructor={instructor} 
      />
    </div>
  </Maybe>
)

InstructorLessons.propTypes = {
  instructor: PropTypes.object,
}

export default InstructorLessons
