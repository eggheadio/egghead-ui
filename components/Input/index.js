import React, {PropTypes} from 'react'
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
                errorMsg, disabled=false, value, icon}) => {
  let inputStyles = standardClasses

  const fieldIcon = iconMap[icon]

  // If field is required, set style to error or success
  if (required) {
    inputStyles = error ? errorClasses : successClasses
  }

  return (
    <div className='relative eh-text-field-wrapper'>
      <input type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        defaultValue={value}
        className={`${commonClasses} ${inputStyles} ${disabled ? disabledClasses : ''}`}
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

export default Input
