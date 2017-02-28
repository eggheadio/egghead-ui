import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'

const labelClasses = 'w-50 normal lh-copy tc light-gray relative z-1 pv2 pointer'

const StyledInput = styled.input`
  &:checked + span {
    transform: translateX(100%);
  }
`

export class Switcher extends Component {
  static propTypes = {
    leftOption: PropTypes.string,
    rightOption: PropTypes.string,
    leftChecked: PropTypes.bool,
    onClick: PropTypes.func
  }

  constructor(props) {
    super(props)

    const leftChecked = 'leftChecked' in props ? props.leftChecked : false

    this.state = { leftChecked }
  }

  handleChange = (e) => {
    const { leftChecked } = this.state
    console.log('leftChecked:', leftChecked)
    this.setState({ leftChecked: !leftChecked })
  }

  render() {
    const { rightOption, leftOption, onClick } = this.props
    const { leftChecked } = this.state
    
    return (
      <div className='w5 relative flex items-center br-pill ba b--light-navy bg-dark-navy'>
        <label className={`${labelClasses} border-box`} htmlFor='left'>
          {leftOption}
        </label>
        <input type='radio' name={leftOption} id='left' className='absolute o-0' onChange={this.handleChange} />
        
        <label className={`${labelClasses} border-box`}>
          {rightOption}
        </label>
        <input type='radio' name={rightOption} id='right' className='absolute o-0' onChange={this.handleChange} />

        <span className='w-50 db br-pill pa2 bg-blue absolute left-0 border-box'
              style={{
                transition: '150ms',
                transform: 'translateX(100%)'
              }}>
          <span className='db h2'></span>
        </span>
      </div>
    )
  }
}

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
