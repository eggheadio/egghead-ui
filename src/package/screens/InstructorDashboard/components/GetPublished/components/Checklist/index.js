import React, {PropTypes} from 'react'
import {Link} from 'react-router-dom'
import {map} from 'lodash'
import Icon from 'components/Icon'
import List from 'components/List'
import MoreInfo from './components/MoreInfo'

const Checklist = ({items}) => (
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

Checklist.propTypes = {
  items: PropTypes.arrayOf(React.PropTypes.shape({
    isComplete: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    moreInfoUrl: PropTypes.string,
    action: PropTypes.string,
  })).isRequired,
}

export default Checklist
