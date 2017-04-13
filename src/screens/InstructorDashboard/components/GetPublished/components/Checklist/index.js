import React from 'react'
import {Link} from 'react-router-dom'
import {map} from 'lodash'
import {Icon, List} from 'egghead-ui'
import MoreInfo from './components/MoreInfo'

export default ({items}) => (
  <List items={map(items, (item, index) => (
    <div 
      key={index}
      className='flex items-center justify-between'
    >

      <div className='flex items-center'>

        <div className='mr3'>
          {index + 1}
        </div>

        <span className={item.isComplete
          ? `strike gray-secondary`
          : 'base'
        }>
          {item.description}
        </span>

      </div>

      {item.isComplete
        ? <Icon 
            type='check' 
            color='green'
          />
        : <div>
            {item.moreInfoUrl
              ? <span className='ml2'>
                  <MoreInfo url={item.moreInfoUrl} />
                </span>
              : null
            }
            {item.action
              ? <Link 
                  to={item.action}
                  className='ml2'
                >
                  <Icon 
                    type='chevron-right' 
                    size='4'
                  />
                </Link>
              : null
            }
          </div>
      }

    </div>
  ))} />
)
