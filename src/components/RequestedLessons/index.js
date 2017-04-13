import React from 'react'
import {Text} from 'react-localize'
import Paragraph from 'components/Paragraph'
import Heading from 'components/Heading'
import Card from 'components/Card'
import LessonOverviews from 'components/LessonOverviews'
import ProposeLesson from './components/ProposeLesson'

export default ({instructor}) => (
  <div>

    <Heading level='5'>
      <Text message='requestedLessons.title' />
    </Heading>

    <Paragraph type='small'>
      <Text message='requestedLessons.description' />
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
          <Text message='requestedLessons.fallback' />
        </Paragraph>
      }
    />

  </div>
)
