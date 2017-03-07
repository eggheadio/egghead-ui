import React, {Component, PropTypes} from 'react'
import {first} from 'lodash'

export const selectedItems = ['left', 'right']

const labelClasses = 'w-50 normal lh-copy tc light-gray relative z-1 pv2 pointer border-box'

const Highlight = ({selectedItem}) => {
  return (
    <span className='w-50 db br-pill pa2 bg-blue absolute left-0 border-box'
          style={{
            transition: '150ms',
            transform: selectedItem === 'right' ? 'translateX(100%)' : ''
          }}>
      <span className='db h2' />
    </span>
  )
}

class Toggle extends Component {

  state = {
    selectedItem: this.props.selectedItem
  }

  handleChange = (e) => {
    const { selectedItem } = this.state
    this.setState({ selectedItem: selectedItem === 'left' ? 'right' : 'left' })
  }

  render() {
    const {rightOption, leftOption, onClick} = this.props
    const {selectedItem} = this.state

    return (
      <div className='w5 relative flex items-center br-pill ba b--light-navy bg-dark-navy'>
        <label className={labelClasses} htmlFor='left'>
          {leftOption}
         <input onClick={onClick} type='radio' name={leftOption} id='left' className='absolute o-0' checked={selectedItem === 'left'} onChange={this.handleChange} />
        </label>
        
        <label className={labelClasses}>
          {rightOption}
          <input onClick={onClick} type='radio' name={rightOption} id='right' className='absolute o-0' checked={selectedItem === 'right'} onChange={this.handleChange} />
        </label>
        
        <Highlight selectedItem={selectedItem} />

      </div>
    )
  }
}

Toggle.propTypes = {
  leftOption: PropTypes.string.isRequired,
  rightOption: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  selectedItem: PropTypes.oneOf(selectedItems),
}

Toggle.defaultProps = {
  selectedItem: first(selectedItems),
}

export default Toggle
