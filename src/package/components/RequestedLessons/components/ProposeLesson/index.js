import React from 'react'
import Open from 'package/components/Open'
import IconLabel from 'package/components/IconLabel'
import ProposeLessonForm from './components/ProposeLessonForm'

export default ({instructor, technologiesUrl}) => (
  <Open>
    {({isOpen, handleOpenToggleClick}) => isOpen 
      ? <ProposeLessonForm 
          instructor={instructor} 
          technologiesUrl={technologiesUrl}
        />
      : <div 
          onClick={handleOpenToggleClick}
          className='ttu'
        >
          <IconLabel
            iconType='add'
            labelText='Propose a new lesson'
            color='blue'
          />
        </div>
    }
  </Open>
)
