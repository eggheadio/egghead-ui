import {PropTypes, Component} from 'react'

export default class Open extends Component {
  
  state = {
    isOpen: false,
  }

  handleOpenToggleClick = () => {
    const {isOpen} = this.state
    this.setState({
      isOpen: !isOpen,
    })
  }

  render() {
    const {isOpen} = this.state
    const {children} = this.props
    return children({
      isOpen,
      handleOpenToggleClick: this.handleOpenToggleClick,
    })
  }
}

Open.propTypes = {
  children: PropTypes.func.isRequired,
}
