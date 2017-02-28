import React, { Component, PropTypes } from 'react'

const labelClasses = 'w-50 normal lh-copy tc light-gray relative z-1 pv2 pointer'

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
Highlight.propTypes = {
  selectedItem: PropTypes.oneOf(['left', 'right']),
}

class Switcher extends Component {
  static propTypes = {
    leftOption: PropTypes.string,
    rightOption: PropTypes.string,
    selectedItem: PropTypes.oneOf(['left', 'right']),
    onClick: PropTypes.func
  }


  state = { selectedItem: this.props.selectedItem === 'left' ? 'left' : 'right' }

  handleChange = (e) => {
    const { selectedItem } = this.state
    this.setState({ selectedItem: selectedItem === 'left' ? 'right' : 'left' })
  }

  render() {
    const { rightOption, leftOption, onClick } = this.props
    const { selectedItem } = this.state

    return (
      <div className='w5 relative flex items-center br-pill ba b--light-navy bg-dark-navy'>
        <label className={`${labelClasses} border-box`} htmlFor='left'>
          {leftOption}
         <input type='radio' name={leftOption} id='left' className='absolute o-0' checked={selectedItem === 'left'} onChange={this.handleChange} />
        </label>
        
        <label className={`${labelClasses} border-box`}>
          {rightOption}
          <input type='radio' name={rightOption} id='right' className='absolute o-0' checked={selectedItem === 'right'} onChange={this.handleChange} />
        </label>
        
        <Highlight selectedItem={selectedItem} />

      </div>
    )
  }
}

export default Switcher
