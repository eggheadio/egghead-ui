import React from 'react'
import {map} from 'lodash'
import {Link} from 'react-router-dom'

const ResourceDirectory = ({resources}) => (
  <nav className='flex flex-wrap'>
    {map(resources.items, (value, key) => (
      <Link 
        key={key}
        to={`${resources.urlBase}/${key}`}
        className='db pa3 mb2 mr2 bg-base-secondary dark-gray no-underline'
      >
        {key}
      </Link>
    ))}
  </nav>
)

export default ResourceDirectory
