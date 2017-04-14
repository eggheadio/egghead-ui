import React, {PropTypes, Component} from 'react'
import {keys} from 'lodash'

export const classNameBySizes = {
  1: 'w1 h1',
  2: 'w2 h2',
  3: 'w3 h3',
  4: 'w4 h4',
}

export const sizes = keys(classNameBySizes)

export default class Avatar extends Component {

  state = {
    hasLoaded: false,
  }

  handleLoad = () => {
    this.setState({hasLoaded: true});
  }

  render() {
    const {hasLoaded} = this.state
    const {name, url, size} = this.props
    const alt = `Avatar for ${name}`
    const containerClassName = `bg-gray-secondary dib br-100 ${classNameBySizes[size]}`

    if(hasLoaded) {
      return (
        <div
          className={containerClassName}
          style={{
            background: `url(${url}) center center / cover no-repeat`,
          }}
          role='img'
          aria-label={alt}
        />
      )
    }

    return (
      <div className={containerClassName}>
        <img
          onLoad={this.handleLoad}
          src={url}
          alt={alt}
          style={{
            display: 'none',
          }}
        />
      </div>
    )
  }
}

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  size: PropTypes.oneOf(sizes).isRequired,
}

Avatar.defaultProps = {
  size: '3',
}
