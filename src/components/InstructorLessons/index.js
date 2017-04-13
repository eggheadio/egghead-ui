import React from 'react'
import {Text} from 'react-localize'
import {Maybe, Heading} from 'egghead-ui'
import LessonOverviewsByGroup from 'components/LessonOverviewsByGroup'

export default ({instructor}) => (
  <Maybe condition={Boolean(instructor)}>
    <div>
      <Heading level='5'>
        <Text
          message='lessonOverviewsByGroup.instructorTitle'
          values={[instructor.first_name]}
        />
      </Heading>
      <LessonOverviewsByGroup instructor={instructor} />
    </div>
  </Maybe>
)
