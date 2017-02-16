import React, {PropTypes} from 'react'

export const levels = ['1', '2', '3', '4', '5']

const Heading = ({children, level}) => {

  const outputByLevel = {
    1: (
      <h1 className='mt0 normal f1 mb4'>
        {children}
      </h1>
    ),
    2: (
      <h2 className='mt0 normal f2 mb3'>
        {children}
      </h2>
    ),
    3: (
      <h3 className='mt0 bold f3 mb2'>
        {children}
      </h3>
    ),
    4: (
      <h4 className='mt0 bold f4 mb2'>
        {children}
      </h4>
    ),
    5: (
      <h5 className='mt0 bold f5 mb2'>
        {children}
      </h5>
    ),
  }

  return (
    <div>
      {outputByLevel[level]}
    </div>
  )
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf(levels).isRequired,
}

export default Heading
