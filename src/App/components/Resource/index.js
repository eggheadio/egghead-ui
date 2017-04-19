import React, {PropTypes} from 'react'
import {compact, size} from 'lodash'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import Tabs from 'components/Tabs'
import Markdown from 'components/Markdown'
import Types from './components/Types'
import Examples, {optOuts} from './components/Examples'

const Resource = ({name, resource}) => (
  <section>
    <Tabs groups={compact([
      {
        title: 'Usage',
        component: (
          <div className='mt4'>

            <section>
              <Heading level='2'>
                Use Case
              </Heading>
              <Paragraph>
                {resource.useCase}
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

            {resource.types && size(resource.types) > 0
              ? <Types
                  title='Types' 
                  types={resource.types}
                />
              : null
            }

            {resource.childrenTypes && size(resource.childrenTypes) > 0
              ? <Types
                  title='Children Types' 
                  types={resource.childrenTypes}
                />
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
    useCase: PropTypes.string.isRequired,
    types: PropTypes.object,
    childrenTypes: PropTypes.object,
    createExamples: PropTypes.func,
    optOut: PropTypes.arrayOf(PropTypes.oneOf(optOuts)),
  }).isRequired,
}

export default Resource
