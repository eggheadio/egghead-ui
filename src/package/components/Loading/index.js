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
  animation: ${rotate360} 1.5s linear infinite;
`

const Loading = () => (
  <div className='orange flex items-center'>
    <div className='mr2'>
      <StyledDiv>
        <Icon
          type='refresh'
          color='orange'
        />
      </StyledDiv>
    </div>
    Loading...
  </div>
)

export default Loading
