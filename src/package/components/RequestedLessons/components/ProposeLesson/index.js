import React from 'react'
import Open from 'package/components/Open'
import IconLabel from 'package/components/IconLabel'
import ProposeLessonForm from './components/ProposeLessonForm'

export default ({instructor, lessonsUrl, technologiesUrl}) => (
  <Open>
    {({isOpen, handleOpenToggleClick}) => isOpen 
      ? <ProposeLessonForm 
          instructor={instructor} 
          lessonsUrl={lessonsUrl}
          technologiesUrl={technologiesUrl}
        />
      : <a
          onClick={handleOpenToggleClick}
          className='pointer dim ttu'
        >
          <IconLabel
            iconType='add'
            labelText='Propose a new lesson'
            color='blue'
          />
        </a>
    }
  </Open>
)
