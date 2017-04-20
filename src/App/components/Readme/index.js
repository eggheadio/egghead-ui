import React from 'react'
import Heading from 'package/components/Heading'
import Markdown from 'package/components/Markdown'
import Paragraph from 'package/components/Paragraph'

const Readme = () => (
  <section>

    <Heading level='2'>
      1) Install
    </Heading>
    <Markdown>
      {"`$ yarn add egghead-ui`"}
    </Markdown>

    <Heading level='2'>
      2) Import
    </Heading>
    <Markdown>
      {"`import {resource} from 'egghead-ui'`"}
    </Markdown>

    <Heading level='2'>
      3) Upgrade
    </Heading>
    <Markdown>
      {"`$ yarn upgrade egghead-ui`"}
    </Markdown>
    <Paragraph>
      When new versions are released
    </Paragraph>

    <div className='mt5'>
      <Heading level='4'>
        Notes
      </Heading>
      <Paragraph type='small'>
        Components that request data require you to log in with an egghead account (local storage needs a "token" key with a jwt for endpoint use). These components also conditionally display parts of their UI based on what is available to the currently logged in user. This means that when viewing examples sometimes nothing will be rendered (for example, if the passed in instructor or lesson doesn't have certain data); when this happens, keep tapping "Randomize" until you get a set of data that can show the component.
      </Paragraph>
    </div>

  </section>
)

export default Readme
