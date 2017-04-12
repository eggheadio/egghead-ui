import React, {PropTypes} from 'react'
import {Link} from 'react-router-dom'
import {startsWith} from 'lodash'
import Button from '../Button'
import Paragraph from '../Paragraph'

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
        ? <Link to={action}>
            <Button size='extra-small'>
              {actionText}
            </Button>
          </Link>
        : <a href={action}>
            <Button size='extra-small'>
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
