import React from 'react'
import Heading from 'components/Heading'
import LessonOverviewsByGroup from 'components/LessonOverviewsByGroup'

const LessonsDirectory = () => (
  <div>
    <Heading level='5'>
      All Lessons
    </Heading>
    <LessonOverviewsByGroup />
  </div>
)

export default LessonsDirectory
