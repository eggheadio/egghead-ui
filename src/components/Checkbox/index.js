import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import Icon from '../Icon'

export const commonLabelClasses = 'inline-flex v-top items-center lh-title f4 white sans-serif overflow-hidden pointer'
export const commonIconClasses = 'mr3 ba b--white hover-b--green'
export const inputClasses = 'o-0 absolute left--1'
export const disabledClasses = 'disabled'


const checkboxClasses = 'eh-checkbox'
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

  state = {
    checked: 'checked' in this.props ? this.props.checked : false
  }

  handleChange = (e) => {
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
          <input type='checkbox' className={`${inputClasses}`} disabled={disabled} checked={checked}
            onClick={onClick} onChange={this.handleChange}
          />
          <Icon type={checked ? 'check' : null} className={boxIconClasses} />
          {label}
      </label>
    )
  }
}

export default styled(Checkbox)`
  input[type='checkbox'] {}
  input[type='checkbox']:checked {}
  input[type='checkbox']:checked + .eh-checkbox-icon {
    color: #1b1f24;
    background-color: #add960;
    border-color: #add960;
  }
  &.disabled {
    color: #646e7b;
    cursor: not-allowed;
  }
  &.disabled .eh-checkbox-icon {
    border-color: #434b56;
  }
  &.disabled input[type='checkbox'] {}
  &.disabled input[type='checkbox']:checked {}
  &.disabled input[type='checkbox']:checked + .eh-checkbox-icon {
    background-color: #434b56;
    border-color: #434b56;
  }
  .eh-checkbox-icon {
    width: 21px;
    height: 21px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
  }
`
