import React, {PropTypes} from 'react'
import {hasUnlockedPublished} from 'package/utils/instructorMilestones'
import LayoutColumns from 'package/components/LayoutColumns'
import InstructorRevenue from 'package/components/InstructorRevenue'
import InstructorStats from 'package/components/InstructorStats'
import InstructorLessons from 'package/components/InstructorLessons'
import RequestedLessons from 'package/components/RequestedLessons'
import GetPublished from './components/GetPublished'
import Help from './components/Help'

const InstructorDashboard = ({
  instructor,
  lessonsUrl,
  technologiesUrl,
}) => hasUnlockedPublished(instructor.published_lessons)
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
          <RequestedLessons 
            instructor={instructor} 
            lessonsUrl={lessonsUrl}
            technologiesUrl={technologiesUrl}
          />,
        ]}
        relativeSizes={[2, 1]}
      />
    </div>
  : <div>
      <LayoutColumns items={[
        <GetPublished instructor={instructor} />,
        <RequestedLessons 
          instructor={instructor} 
          lessonsUrl={lessonsUrl}
          technologiesUrl={technologiesUrl}
        />,
        <Help publishedLessons={instructor.published_lessons} />,
      ]} />
      <InstructorLessons instructor={instructor} />
    </div>

InstructorDashboard.propTypes = {
  instructor: PropTypes.object.isRequired,
  lessonsUrl: PropTypes.string.isRequired,
}

export default InstructorDashboard
