import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  &:checked + span {
    transform: translateX(100%);
  }
`

const StaticSwitcher = () => (
  <div className='w5 relative flex items-center br-pill ba b--light-navy bg-dark-navy'>
    <label className='w-50 normal lh-copy tc light-gray relative z-1 pv2 pointer'
           htmlFor='some-id-left'
           style={{boxSizing: 'border-box'}}>Monthly</label>
    <input type='radio' name='some-name' id='some-id-left' className='absolute o-0' />
    <label className='w-50 normal lh-copy tc light-gray relative z-1 pv2 pointer'
           htmlFor='some-id-right'
           style={{boxSizing: 'border-box'}}>Weekly</label>
    <StyledInput type='radio' name='some-name' id='some-id-right' className='absolute o-0' />
    <span className='w-50 db br-pill pa2 bg-blue absolute left-0'
          style={{
            boxSizing: 'border-box',
            transition: '150ms'
          }}>
      <span className='db h2'></span>
    </span>
  </div>
)

export default StaticSwitcher
