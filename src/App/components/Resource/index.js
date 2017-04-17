import React, {PropTypes} from 'react'
import {map, isArray} from 'lodash'
import {Link} from 'react-router-dom'
import Tabs from 'components/Tabs'
import Markdown from 'components/Markdown'
import Examples from './components/Examples'

const Resource = ({name, resource}) => (
  <section>
    <Tabs groups={[
      {
        title: 'Examples',
        component: (
          <div className='mt4'>
            <Examples createExamples={resource.createExamples} />
          </div>
        ),
      },
      {
        title: 'Usage',
        component: (
          <div className='mt4'>

            <Markdown>
              {`\`import {${name}} from 'egghead-ui'\``}
            </Markdown>

            <div className='mv4 flex-ns flex-wrap-ns'>
              {map(resource.types, (value, key) => (
                <div 
                  key={key}
                  className='mb4 mr5-ns'
                >
                  <div className='white mb1'>
                    {key}
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
                      : value === 'colors'
                        ? <Link to='/colors'>
                            colors
                          </Link>
                        : value
                    }
                  </div>
                </div>
              ))}
            </div>

          </div>
        ),
      }
    ]} />
  </section>
)

Resource.propTypes = {
  name: PropTypes.string.isRequired,
  resource: React.PropTypes.shape({
    types: PropTypes.object.isRequired,
    createExamples: PropTypes.func.isRequired,
  }).isRequired,
}

export default Resource
