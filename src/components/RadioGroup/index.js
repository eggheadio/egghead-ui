import React, { Component } from 'react'
import {map, assign} from 'lodash'
import styled from 'styled-components'
import {commonLabelClasses, commonIconClasses, inputClasses, disabledClasses} from '../../utils/formClassNames'

const radioClasses = 'mb2 mh2 eh-radio'
const radioIconClasses = `${commonIconClasses} br-pill eh-radio-icon`

class RadioGroup extends Component {

  state = {
    items: map(this.props.options, option => assign(option, {checked: false})),
    selectedItem: '',
  }

  handleChange = (e) => {
    this.setState({selectedItem: e.target.id})
  }

  render() {
    const {className} = this.props
    const {items} = this.state

    return (
      <div>
        {map(items, item => (
          <label key={item.value}
            className={`${commonLabelClasses} ${radioClasses} ${className} ${item.disabled ? disabledClasses : ''}`}
          >
            <input type='radio' className={inputClasses} disabled={item.disabled}
              checked={this.state.selectedItem === item.value}
              onChange={(e) => this.handleChange(e)} id={item.value}
            />
            <i className={radioIconClasses} />
            {item.label}
          </label>
        ))}
      </div>
    )
  }
}

const StyledRadioGroup = styled(RadioGroup)`
  input[type='radio'] {}
  input[type='radio']:checked {}
  input[type='radio']:checked + .eh-radio-icon {
    background-color: #add960;
    border-color: #add960;
  }
  &.disabled {
    color: #646e7b;
    cursor: not-allowed;
  }
  &.disabled .eh-radio-icon {
    border-color: #434b56;
  }
  &.disabled input[type='radio'] {}
  &.disabled input[type='radio']:checked {}
  &.disabled input[type='radio']:checked + .eh-radio-icon {
    background-color: #434b56;
    border-color: #434b56;
  }
  .eh-radio-icon {
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
`

StyledRadioGroup.propTypes = {
  options: React.PropTypes.arrayOf(React.PropTypes.shape({
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    disabled: React.PropTypes.bool
  })).isRequired
}

export default StyledRadioGroup
