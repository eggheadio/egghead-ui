import React, {PropTypes, Component} from 'react'
import elementResizeEvent, {unbind} from 'element-resize-event'
import {
  smallContainerWidth,
  mediumContainerWidth,
  largeContainerWidth,
  xlargeContainerWidth,
  xxlargeContainerWidth,
} from 'package/utils/hardCodedSizes'

export default class ContainerWidth extends Component {
  
  state = {
    containerWidth: 'small',
  }

  componentDidMount = () => {
    this.handleWidthChange()
    elementResizeEvent(this.refs.container, this.handleWidthChange)
  }

  componentWillUnmount = () => {
    unbind(this.refs.container)
  }

  handleWidthChange = () => {
    const {onWidthChange} = this.props
    if(onWidthChange) {
      onWidthChange()
    }
    const containerExactWidth = this.refs.container.clientWidth
    if(containerExactWidth >= xxlargeContainerWidth) {
      this.setState({
        containerWidth: 'xxlarge',
      })
    }
    else if(containerExactWidth >= xlargeContainerWidth) {
      this.setState({
        containerWidth: 'xlarge',
      })
    }
    else if(containerExactWidth >= largeContainerWidth) {
      this.setState({
        containerWidth: 'large',
      })
    }
    else if (containerExactWidth >= mediumContainerWidth) {
      this.setState({
        containerWidth: 'medium',
      })
    }
    else if (containerExactWidth >= smallContainerWidth) {
      this.setState({
        containerWidth: 'small',
      })
    }
    else {
      this.setState({
        containerWidth: 'xsmall',
      })
    }
  }

  render() {
    const {containerWidth} = this.state
    const {children, className} = this.props
    return (
      <div 
        ref='container'
        className={className}
      >
        {children(containerWidth)}
      </div>
    )
  }
}

ContainerWidth.propTypes = {
  children: PropTypes.func.isRequired,
  onWidthChange: PropTypes.func,
}
