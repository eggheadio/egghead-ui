import React from 'react'
import styled, {keyframes} from 'styled-components'
import Icon from 'package/components/Icon'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const StyledDiv = styled.div`
  animation: ${rotate360} 0.7s linear infinite;
`

const Loading = () => (
  <div 
    className='flex items-center'
    style={{
      color: 'transparent',
    }}
  >
    <div className='mr2'>
      <StyledDiv>
        <Icon 
          type='progress-ring' 
          color='transparent'
        />
      </StyledDiv>
    </div>
    <div className='orange'>
      Loading...
    </div>
  </div>
)

export default Loading
