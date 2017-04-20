import React, {PropTypes} from 'react'
import Heading from 'package/components/Heading'

const Main = ({children, title}) => (
  <main className='pa4 min-vh-100 w-100 mw8'>
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
