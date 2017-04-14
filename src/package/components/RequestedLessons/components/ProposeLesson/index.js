import React from 'react'
import Open from 'components/Open'
import IconLabel from 'components/IconLabel'
import ProposeLessonForm from './components/ProposeLessonForm'

export default ({instructor}) => (
  <Open>
    {({isOpen, handleOpenToggleClick}) => isOpen 
      ? <ProposeLessonForm instructor={instructor} />
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
