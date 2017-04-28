import React, {PropTypes} from 'react'
import {Link} from 'react-router-dom'
import {startsWith} from 'lodash'
import Button from 'package/components/Button'
import Paragraph from 'package/components/Paragraph'

const Prompt = ({
  description,
  actionText,
  action,
}) => (
  <div>
    <Paragraph>
      {description}
    </Paragraph>
    <div className='mt3'>
      {startsWith(action, '/') 
        ? <Link 
            to={action}
            className='no-underline'
          >
            <Button size='small'>
              {actionText}
            </Button>
          </Link>
        : <a 
            href={action}
            className='pointer dim no-underline'
          >
            <Button size='small'>
              {actionText}
            </Button>
          </a>
      }
    </div>
  </div>
)

Prompt.propTypes = {
  description: PropTypes.string.isRequired,
  actionText: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
}

export default Prompt
