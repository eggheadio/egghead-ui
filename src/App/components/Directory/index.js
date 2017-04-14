import React, {PropTypes} from 'react'
import {map, isArray} from 'lodash'
import Heading from 'components/Heading'
import Markdown from 'components/Markdown'
import Anchor from 'components/Anchor'

const Directory = ({resources}) => (
  <section>
    {map(resources, (resource) => (
      <section
        key={resource.component.name}
        className=''
      >
        <Heading level='2'>
          {resource.component.name}
        </Heading>
        <div className='mb4'>
          <Markdown>
            {`\`import {${resource.component.name}} from 'egghead-ui'\``}
          </Markdown>
        </div>

        <div className='mb3'>
          <Heading level='3'>
            Props
          </Heading>
        </div>
        <div className='mb4 flex-ns flex-wrap-ns'>
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
                    ? <Anchor url='/colors'>
                        colors
                      </Anchor>
                    : value
                }
              </div>
            </div>
          ))}
        </div>

        <div className='mb3'>
          <Heading level='3'>
            Examples
          </Heading>
        </div>
        <div className='mb4'>
        </div>

      </section>
    ))}
  </section>
)

Directory.propTypes = {
  resources: PropTypes.arrayOf(React.PropTypes.shape({
    component: PropTypes.func.isRequired,
    types: PropTypes.object.isRequired,
    examples: PropTypes.array.isRequired,
  })).isRequired,
}

export default Directory
