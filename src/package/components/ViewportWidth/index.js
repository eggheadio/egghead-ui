import {PropTypes, Component} from 'react'
import {likelyDesktopViewportWidth} from 'package/utils/hardCodedSizes'

class ViewportWidth extends Component {
  
  state = {
    isLikelyDesktop: false,
  }

  componentDidMount = () => {
    if (!window) {
      return
    }
    this.handleWidthChange()
    window.onresize = this.handleWidthChange
  }

  componentWillUnmount = () => {
    if (!window) {
      return
    }
    window.onresize = null
  }

  handleWidthChange = () => {
    if (!window) {
      return
    }
    const {onWidthChange} = this.props
    if(onWidthChange) {
      onWidthChange()
    }
    if(window.innerWidth >= likelyDesktopViewportWidth) {
      this.setState({
        isLikelyDesktop: true,
      })
    }
    else {
      this.setState({
        isLikelyDesktop: false,
      })
    }
  }

  render() {
    const {isLikelyDesktop} = this.state
    const {children} = this.props
    return children(isLikelyDesktop)
  }
}

ViewportWidth.propTypes = {
  children: PropTypes.func.isRequired,
  onWidthChange: PropTypes.func,
}

export default ViewportWidth
