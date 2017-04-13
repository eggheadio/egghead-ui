import React from 'react'
import Maybe from 'components/Maybe'
import Heading from 'components/Heading'
import LessonOverviewsByGroup from 'components/LessonOverviewsByGroup'

export default ({instructor}) => (
  <Maybe condition={Boolean(instructor)}>
    <div>
      <Heading level='5'>
        {`${instructor.first_name}'s Lessons`}
      </Heading>
      <LessonOverviewsByGroup instructor={instructor} />
    </div>
  </Maybe>
)
