import React from 'react'
import {map, size} from 'lodash'
import {Text} from 'react-localize'
import Paragraph from 'components/Paragraph'
import Card from 'components/Card'
import InstructorOverview from './components/InstructorOverview'

export default ({title, instructors}) => size(instructors) > 0
  ? <div>
      {map(instructors, (instructor, index) => (
        <div 
          key={instructor.id}
          className={index < instructors.length - 1 ? 'mb3' : ''}
        >
          <Card>
            <div className='pa4'>
              <InstructorOverview
                key={index}
                instructor={instructor} 
              />
            </div>
          </Card>
        </div>
      ))}
    </div>
  : <Paragraph>
      <Text message='instructorOverviewsByGroup.fallback' />
    </Paragraph>
