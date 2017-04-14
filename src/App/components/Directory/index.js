import React, {PropTypes} from 'react'
import {map} from 'lodash'
import Heading from 'components/Heading'
import Markdown from 'components/Markdown'

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

        <Heading level='3'>
          Usage
        </Heading>
        <Markdown>
          {`\`import {${resource.component.name}} from 'egghead-ui'\``}
        </Markdown>

      </section>
    ))}
  </section>
)

Directory.propTypes = {
  resources: PropTypes.arrayOf(React.PropTypes.shape({
    component: PropTypes.func.isRequired,
  })).isRequired,
}

export default Directory
