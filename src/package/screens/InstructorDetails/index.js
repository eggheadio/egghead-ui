import React, {PropTypes} from 'react'
import LayoutColumns from 'package/components/LayoutColumns'
import InstructorStats from 'package/components/InstructorStats'
import InstructorLessons from 'package/components/InstructorLessons'
import InstructorRevenue from 'package/components/InstructorRevenue'
import InstructorInfo from './components/InstructorInfo'

const InstructorDetails = ({instructor}) => (
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

InstructorDetails.propTypes = {
  instructor: PropTypes.object,
}

export default InstructorDetails
