import {PropTypes, Component} from 'react'
import {smallScreenWidth, largeScreenWidth} from '../../utils/hardCodedSizes'

export default class DeviceWidth extends Component {
  
  state = {
    screenSize: 'small',
  }

  componentDidMount = () => {
    this.handleWidthChange()
    window.onresize = this.handleWidthChange
  }

  componentWillUnmount = () => {
    window.onresize = null
  }

  handleWidthChange = () => {
    const {onWidthChange} = this.props
    if(onWidthChange) {
      onWidthChange()
    }
    if(window.screen.width > largeScreenWidth) {
      this.setState({
        screenSize: 'large',
      })
    }
    else if (window.screen.width > smallScreenWidth) {
      this.setState({
        screenSize: 'medium',
      })
    }
    else {
      this.setState({
        screenSize: 'small',
      })
    }
  }

  render() {
    const {screenSize} = this.state
    const {children} = this.props
    return children(screenSize)
  }
}

DeviceWidth.propTypes = {
  onWidthChange: PropTypes.func,
}
