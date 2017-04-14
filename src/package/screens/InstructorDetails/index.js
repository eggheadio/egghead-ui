import React from 'react'
import LayoutColumns from 'components/LayoutColumns'
import InstructorStats from 'components/InstructorStats'
import InstructorLessons from 'components/InstructorLessons'
import InstructorRevenue from 'components/InstructorRevenue'
import InstructorInfo from './components/InstructorInfo'

export default ({instructor}) => (
  <div>
    <LayoutColumns 
      items={[
        <div>
          <InstructorInfo instructor={instructor} />
        </div>,
        <InstructorLessons instructor={instructor} />,
      ]} 
      relativeSizes={[1, 2]}
    />
    <LayoutColumns
      items={[
        <InstructorStats instructor={instructor} />,
        <InstructorRevenue revenueUrl={instructor.revenue_url} />,
      ]}
      relativeSizes={[1, 2]}
    />
  </div>
)
