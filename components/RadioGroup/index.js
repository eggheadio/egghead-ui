import React, { Component } from 'react'
import { commonLabelClasses, commonIconClasses, inputClasses, disabledClasses } from '../Checkbox'

const radioClasses = 'mb2 mh2 eh-radio'
const radioIconClasses = `${commonIconClasses} br-pill eh-radio-icon`

class RadioButtonGroup extends Component {
  static propTypes = {
    optionList: React.PropTypes.arrayOf(React.PropTypes.shape({
      value: React.PropTypes.string.isRequired,
      label: React.PropTypes.string.isRequired,
      checked: React.PropTypes.bool,
      disabled: React.PropTypes.bool
    })).isRequired
  }

  constructor(props) {
    super(props)
    this.state = { selectedItem: '' }
  }

  handleChange = (e) => {
    this.setState({ selectedItem: e.target.id })
  }

  render() {
    const { optionList } = this.props
    const radioButton = (item) => {
      if (item.checked) {
        this.setState({ selectedItem: item.value })
        item = Object.assign(item, { checked: false })
      }

      return (
        <label key={item.value}
          className={`${commonLabelClasses} ${radioClasses} ${item.disabled ? disabledClasses : ''}`}
        >
          <input type='radio' className={inputClasses} disabled={item.disabled}
            checked={this.state.selectedItem === item.value}
            onChange={(e) => this.handleChange(e)} id={item.value}
          />
          <i className={radioIconClasses} />
          {item.label}
        </label>
      )
    }

    return (
      <div>
        {this.props.optionList.map((item) => radioButton(item))}
      </div>
    )
  }
}

export default RadioButtonGroup
