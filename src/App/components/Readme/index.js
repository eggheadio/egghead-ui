import React from 'react'
import Heading from 'components/Heading'
import Markdown from 'components/Markdown'
import Paragraph from 'components/Paragraph'

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

    <Heading level='5'>
      Notes
    </Heading>
    <Paragraph>
      Components that request data require you to log in with an egghead account (a `token` is required to be in local storage for endpoint use).
    </Paragraph>

  </section>
)

export default Readme
