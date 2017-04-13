import React from 'react'
import {hasUnlockedPublished} from 'utils/instructorMilestones'
import LayoutColumns from 'components/LayoutColumns'
import InstructorRevenue from 'components/InstructorRevenue'
import InstructorStats from 'components/InstructorStats'
import InstructorLessons from 'components/InstructorLessons'
import RequestedLessons from 'components/RequestedLessons'
import GetPublished from './components/GetPublished'
import Help from './components/Help'

export default ({instructor}) => hasUnlockedPublished(instructor.published_lessons)
  ? <div>
      <LayoutColumns 
        items={[
          <InstructorRevenue revenueUrl={instructor.revenue_url} />,
          <InstructorStats instructor={instructor} />,
        ]}
        relativeSizes={[2, 1]}
      />
      <LayoutColumns 
        items={[
          <InstructorLessons instructor={instructor} />,
          <RequestedLessons instructor={instructor} />,
        ]}
        relativeSizes={[2, 1]}
      />
    </div>
  : <div>
      <LayoutColumns items={[
        <GetPublished instructor={instructor} />,
        <RequestedLessons instructor={instructor} />,
        <Help publishedLessons={instructor.published_lessons} />,
      ]} />
      <InstructorLessons instructor={instructor} />
    </div>
