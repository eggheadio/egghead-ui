import React from 'react'
import {map} from 'lodash'
import {Link} from 'react-router-dom'

const ResourceDirectory = ({resources}) => (
  <nav>
    {map(resources.items, (value, key) => (
      <Link 
        key={key}
        to={`${resources.urlBase}/${key}`}
        className='db mb2'
      >
        {key}
      </Link>
    ))}
  </nav>
)

export default ResourceDirectory
