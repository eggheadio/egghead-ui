import React, {PropTypes} from 'react'
import ReactMarkdown from 'react-markdown'

const Markdown = ({children}) => (
  <ReactMarkdown source={children} />
)

Markdown.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Markdown
