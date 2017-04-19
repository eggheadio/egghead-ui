import React, {PropTypes} from 'react'
import {map, isArray} from 'lodash'
import {Link} from 'react-router-dom'
import colors from 'utils/colors'
import Heading from 'components/Heading'

const Arguments = ({title, types}) => (
  <section>
    <Heading level='2'>
      {title}
    </Heading>
    <div className='flex flex-wrap justify-start'>
      {map(types, (value, key) => (
        <div 
          key={key}
          className='mb4 mr4'
          style={{
            minWidth: 100,
            maxWidth: 200,
          }}
        >
          <div className='white mb1'>
            {value === colors
              ? <Link to='/colors'>
                  color
                </Link>
              : key
            }
          </div>
          <div>
            {isArray(value)
              ? <div>
                  {map(value, x => (
                    <div key={x}>
                      '{x}'
                    </div>
                  ))}
                </div>
              : value
            }
          </div>
        </div>
      ))}
    </div>
  </section>
)

Arguments.propTypes = {
  title: PropTypes.string.isRequired,
  types: PropTypes.object.isRequired,
}

export default Arguments
