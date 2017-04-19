import React, {PropTypes} from 'react'
import {map, isArray, compact, size} from 'lodash'
import {Link} from 'react-router-dom'
import colors from 'utils/colors'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import Tabs from 'components/Tabs'
import Markdown from 'components/Markdown'
import Examples from './components/Examples'

const Resource = ({name, resource}) => (
  <section>
    <Tabs groups={compact([
      {
        title: 'Usage',
        component: (
          <div className='mt4'>

            <section>
              <Heading level='2'>
                Description
              </Heading>
              <Paragraph>
                {resource.description}
              </Paragraph>
            </section>

            <section>
              <Heading level='2'>
                Import
              </Heading>
              <Markdown>
                {`\`import {${name}} from 'egghead-ui'\``}
              </Markdown>
            </section>

            {resource.arguments && size(resource.arguments) > 0
              ? <section>
                  <Heading level='2'>
                    Arguments
                  </Heading>
                  <div className='flex flex-wrap justify-start'>
                    {map(resource.arguments, (value, key) => (
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
              : null
            }

          </div>
        ),
      },
      resource.createExamples 
        ? {
            title: 'Examples',
            component: (
              <div className='mt4'>
                <Examples 
                  createExamples={resource.createExamples}
                  optOut={resource.optOut}
                />
              </div>
            ),
        }
        : null,
    ])} />
  </section>
)

Resource.propTypes = {
  name: PropTypes.string.isRequired,
  resource: React.PropTypes.shape({
    description: PropTypes.string.isRequired,
    arguments: PropTypes.object,
    createExamples: PropTypes.func,
    optOut: PropTypes.array,
  }).isRequired,
}

export default Resource
