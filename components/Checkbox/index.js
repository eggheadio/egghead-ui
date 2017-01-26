import React, { Component, PropTypes } from 'react'
import Icon from '../Icon'

export const commonLabelClasses = 'inline-flex v-top items-center lh-title f4 white sans-serif overflow-hidden pointer'
export const commonIconClasses = 'mr3 ba b--white hover-b--green'
export const inputClasses = 'o-0 absolute left--1'
export const disabledClasses = 'disabled'


const checkboxClasses = 'pointer eh-checkbox'
const boxIconClasses = `${commonIconClasses} br2 eh-checkbox-icon`

class Checkbox extends Component {
  static propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    onClick: PropTypes.func
  }

  constructor(props) {
    super(props)
  
    const checked = 'checked' in props ? props.checked : false

    this.state = { checked }
  }

  handleChange = (e) => {
    const { onChange, onClick } = this.props
    const { checked } = this.state
 
    this.setState({ checked: !checked })
  }

  render() {
    const { name, label, disabled, onClick } = this.props
    const { checked } = this.state
    
    return (
      <label name={name}
        className={`${commonLabelClasses} ${checkboxClasses} ${disabled ? disabledClasses : ''}`}
      >
          <input type='checkbox' className={inputClasses} disabled={disabled} checked={checked}
            onClick={onClick} onChange={this.handleChange}
          />
          <Icon type={checked ? 'check' : null} className={boxIconClasses} />
          {label}
      </label>
    )
  }
}

export default Checkbox
