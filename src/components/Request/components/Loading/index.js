import React from 'react'
import styled, {keyframes} from 'styled-components'
import Icon from '../../../Icon'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  animation: ${rotate360} 1.5s linear infinite;
`;

const Loading = () => (
  <div className='mv3 gray flex items-center'>
    <div className='mr2'>
      <Rotate>
        <Icon 
          type='refresh'
          color='gray'
        />
      </Rotate>
    </div>
    Loading...
  </div>
)

export default Loading
