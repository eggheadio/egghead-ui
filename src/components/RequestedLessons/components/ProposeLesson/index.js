import React from 'react'
import {Text} from 'react-localize'
import OpenToggle from 'components/OpenToggle'
import IconLabel from 'components/IconLabel'
import ProposeLessonForm from './components/ProposeLessonForm'

export default ({instructor}) => (
  <OpenToggle>
    {({isOpen, handleOpenToggleClick}) => isOpen 
      ? <ProposeLessonForm instructor={instructor} />
      : <div 
          onClick={handleOpenToggleClick}
          className='ttu'
        >
          <IconLabel
            iconType='add'
            labelText={<Text message='requestedLessons.proposeLesson.action' />}
            color='blue'
          />
        </div>
    }
  </OpenToggle>
)
