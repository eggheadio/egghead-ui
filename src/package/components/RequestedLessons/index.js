import React, {PropTypes} from 'react'
import Paragraph from 'package/components/Paragraph'
import Heading from 'package/components/Heading'
import Card from 'package/components/Card'
import LessonOverviews from 'package/components/LessonOverviews'
import ProposeLesson from './components/ProposeLesson'

const RequestedLessons = ({
  instructor,
  lessonsUrl,
}) => (
  <div>

    <Heading level='5'>
      Requested Lessons
    </Heading>

    <Paragraph type='small'>
      {`Here's some ideas for lessons that you can start recording today. If you claim one of these ideas, you'll have 2 weeks to record a draft and upload it. After that it goes back into the pool for others to claim.`}
    </Paragraph>

    <div className='mb3'>
      <Card>
        <div className='pa4'>
          <ProposeLesson instructor={instructor} />
        </div>
      </Card>
    </div>

    <LessonOverviews
      states={['requested']} 
      fallback={
        <Paragraph>
          There are no requested lessons, but you can create your own.
        </Paragraph>
      }
      lessonsUrl={lessonsUrl}
    />

  </div>
)

RequestedLessons.propTypes = {
  instructor: PropTypes.object.isRequired,
  lessonsUrl: PropTypes.string.isRequired,
}

export default RequestedLessons
