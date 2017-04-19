import React, {PropTypes} from 'react'
import InstructorOverviewsByGroups from './components/InstructorOverviewsByGroups'

const InstructorsDirectory = ({instructorsUrl}) => (
  <div>
    <InstructorOverviewsByGroups instructorsUrl={instructorsUrl} />
  </div>
)

InstructorsDirectory.propTypes = {
  instructorsUrl: PropTypes.string.isRequired,
}

export default InstructorsDirectory
