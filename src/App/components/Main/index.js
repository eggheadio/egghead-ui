import React, {PropTypes} from 'react'
import Heading from 'components/Heading'

const Main = ({children, title}) => (
  <main className='pa4 min-vh-100-ns'>
    <Heading level='1'>
      {title}
    </Heading>
    {children}
  </main>
)

Main.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default Main
