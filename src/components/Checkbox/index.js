import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import Icon from '../Icon'

/**
.eh-checkbox input[type='checkbox'] {}
.eh-checkbox input[type='checkbox']:checked {}
.eh-checkbox input[type='checkbox']:checked + .eh-checkbox-icon {
    color: #1b1f24;
    background-color: #add960;
    border-color: #add960;
}
.eh-checkbox.disabled {
    color: #646e7b;
    cursor: not-allowed;
}
.eh-checkbox.disabled .eh-checkbox-icon {
    border-color: #434b56;
}
.eh-checkbox.disabled input[type='checkbox'] {}
.eh-checkbox.disabled input[type='checkbox']:checked {}
.eh-checkbox.disabled input[type='checkbox']:checked + .eh-checkbox-icon {
    background-color: #434b56;
    border-color: #434b56;
}
.eh-radio input[type='radio'] {}
.eh-radio input[type='radio']:checked {}
.eh-radio input[type='radio']:checked + .eh-radio-icon {
    background-color: #add960;
    border-color: #add960;
}
.eh-radio.disabled {
    color: #646e7b;
    cursor: not-allowed;
}
.eh-radio.disabled .eh-radio-icon {
    border-color: #434b56;
}
.eh-radio.disabled input[type='radio'] {}
.eh-radio.disabled input[type='radio']:checked {}
.eh-radio.disabled input[type='radio']:checked + .eh-radio-icon {
    background-color: #434b56;
    border-color: #434b56;
}
.eh-checkbox-icon, .eh-radio-icon {
    width: 21px;
    height: 21px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
        justify-content: center;
    -ms-flex-align: center;
        align-items: center;
}
.eh-radio-icon {}
.eh-radio-icon:before {
    content: '';
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #1b1f24;
} 


 *
 */

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
    const { name, label, disabled, onClick, className } = this.props
    const { checked } = this.state
    
    return (
      <label name={name}
        className={`${commonLabelClasses} ${checkboxClasses} ${className} ${disabled ? disabledClasses : ''}`}
      >
          <input type='checkbox' className={`${inputClasses} ${className}`} disabled={disabled} checked={checked}
            onClick={onClick} onChange={this.handleChange}
          />
          <Icon type={checked ? 'check' : null} className={boxIconClasses} />
          {label}
      </label>
    )
  }
}

export default styled(Checkbox)`
   input[type='checkbox']:checked + -icon {
      color: #1b1f24;
      background-color: #add960;
      border-color: #add960;
  }
  .disabled {
      color: #646e7b;
      cursor: not-allowed;
  }
  .disabled -icon {
      border-color: #434b56;
  }
  .disabled input[type='checkbox'] {}
  .disabled input[type='checkbox']:checked {}
  .disabled input[type='checkbox']:checked + -icon {
      background-color: #434b56;
      border-color: #434b56;
  }
`
