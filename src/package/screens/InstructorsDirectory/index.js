import React, {PropTypes} from 'react'
import InstructorOverviews from './components/InstructorOverviews'

const InstructorsDirectory = ({instructorsUrl}) => (
  <div>
    <InstructorOverviews instructorsUrl={instructorsUrl} />
  </div>
)

InstructorsDirectory.propTypes = {
  instructorsUrl: PropTypes.string.isRequired,
}

export default InstructorsDirectory
