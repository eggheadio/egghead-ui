import React, {PropTypes} from 'react'
import ContainerWidth from 'package/components/ContainerWidth'

export const levels = ['1', '2', '3', '4', '5']

const sharedStyle = {
  wordBreak: 'break-word',
}

const Heading = ({children, level}) => (
  <ContainerWidth> 
    {(containerWidth) => (
      <div>
        {{
          1: (
            <h1 
              className={`${containerWidth === 'xsmall' ? 'f3' : 'f1'} mt0 normal mb4`}
              style={sharedStyle}
            >
              {children}
            </h1>
          ),
          2: (
            <h2 
              className={`${containerWidth === 'xsmall' ? 'f4 bold' : 'f2 normal'} mt0 mb3`}
              style={sharedStyle}
            >
              {children}
            </h2>
          ),
          3: (
            <h3 
              className={`${containerWidth === 'xsmall' ? 'f5 bold' : 'f3 normal'} mt0 mb2`}
              style={sharedStyle}
            >
              {children}
            </h3>
          ),
          4: (
            <h4 
              className={`${containerWidth === 'xsmall' ? 'f5 bold' : 'f4 normal'} mt0 mb2`}
              style={sharedStyle}
            >
              {children}
            </h4>
          ),
          5: (
            <h5 
              className='f5 bold mt0 mb2'
              style={sharedStyle}
            >
              {children}
            </h5>
          ),
        }[level]}
      </div>
    )}
  </ContainerWidth>
)

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  level: PropTypes.oneOf(levels).isRequired,
}

export default Heading
