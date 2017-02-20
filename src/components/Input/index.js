import React, {PropTypes} from 'react'
import styled from 'styled-components'
import {keys} from 'lodash'
import Icon from '../Icon'

const commonClasses = 'db w-100 pl3 pr5 pv3 lh-copy br2 bg-dark-navy ba eh-text-field sans-serif'
const standardClasses = 'white b--gray focus-b-gray'
const errorClasses = 'red b--red focus-b--red'
const errorMsgClasses = 'db red f5 sans-serif mt3'
const successClasses = 'white b--green focus-b--green'
const disabledClasses = 'disabled'
const inputTypes = ['text', 'password']

const inputIconClasses = 'absolute eh-input-status-icon'

const iconMap = {
  error: <Icon type='cancel' color='danger' className={inputIconClasses} />,
  success: <Icon type='success' color='success' className={inputIconClasses} />
}


const Input = ({type='text', placeholder, required=false, error=false,
                errorMsg, disabled=false, value, icon, className}) => {
  let inputStyles = standardClasses

  const fieldIcon = iconMap[icon]

  if (required) {
    inputStyles = error ? errorClasses : successClasses
  }

  return (
    <div className={`${className} relative eh-text-field-wrapper`}>
      <input type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        defaultValue={value}
        className={`${commonClasses} ${inputStyles} ${className} ${disabled ? disabledClasses : ''}`}
      />
      {fieldIcon}
      {errorMsg
        ? <div className={errorMsgClasses}>{errorMsg}</div>
        : null 
      }
    </div>
  )
}

Input.propTypes = {
  type: React.PropTypes.oneOf(inputTypes),
  placeholder: React.PropTypes.string,
  required: React.PropTypes.bool,
  error: React.PropTypes.bool,
  errorMsg: React.PropTypes.string,
  icon: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  defaultValue: React.PropTypes.string
}

export default styled(Input)`
   .eh-text-field {
    font-size: 1.125em;
  }
  .eh-text-field::-webkit-input-placeholder {
    color: gray;
    transition: 150ms;
  }
  .eh-text-field::-moz-placeholder {
    color: gray;
    transition: 150ms;
  }
  .eh-text-field:-ms-input-placeholder {
    color: gray;
    transition: 150ms;
  }
  .eh-text-field:-moz-placeholder {
    color: gray;
    transition: 150ms;
  }
  .eh-text-field:focus {}
  .eh-text-field:focus::-webkit-input-placeholder {
    color: transparent;
    transition: 150ms;
  }
  .eh-text-field:focus::-moz-placeholder {
    color: transparent;
    transition: 150ms;
}
  .eh-text-field:focus:-ms-input-placeholder {
    color: transparent;
    transition: 150ms;
  }
  .eh-text-field:focus:-moz-placeholder {
    color: transparent;
    transition: 150ms;
  }
  .eh-text-field.disabled {
    border-color: #292f36;
    background: #1b1f24;
    color: #646e7b;
    cursor: not-allowed;
  }
  .eh-input-tooltip:before {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0px 8px 9px 8px;
    border-color: transparent transparent #ffffff transparent;
    content: '';
    position: absolute;
    left: 20px;
    top: -9px;
  }
  .eh-input-status-icon {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1.5rem;
    top: 1.25rem;
    right: 1.25rem;
  }
`
