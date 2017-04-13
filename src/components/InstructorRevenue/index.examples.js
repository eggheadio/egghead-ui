import React from 'react'
import {storiesOf} from '@kadira/storybook'
import Authentication from 'components/Authentication'
import InstructorRevenue from '.'

storiesOf('InstructorRevenue')
  .addDecorator((story) => (
    <Authentication userPermissionProperty='instructor_url'>
      {({instructor}) => story(instructor)}
    </Authentication>
  ))
  .addWithInfo(
    'Info',
    'Used to display instructor revenue',
    (instructor) => (
      <InstructorRevenue revenueUrl={instructor.revenue_url} />
    ),
  )
