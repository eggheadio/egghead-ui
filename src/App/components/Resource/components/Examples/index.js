import React, {Component} from 'react'
import {map} from 'lodash'
import {
  minimumScreenWidth, 
  smallScreenWidth,
  largeScreenWidth,
  xlargeScreenWidth,
} from 'utils/hardCodedSizes'
import Heading from 'components/Heading'
import Button from 'components/Button'

const screenWidthActions = [
  {
    label: 'Minimum',
    screenWidth: minimumScreenWidth,
  },
  {
    label: 'Small',
    screenWidth: smallScreenWidth,
  },
  {
    label: 'Large',
    screenWidth: largeScreenWidth,
  },
  {
    label: 'XLarge',
    screenWidth: xlargeScreenWidth,
  },
]

const backgroundActions = [
  {
    label: 'Dark',
    background: 'dark',
  },
  {
    label: 'Light',
    background: 'light',
  },
]

class Examples extends Component {

  state = {
    screenWidth: minimumScreenWidth,
    background: 'dark',
    examples: false,
  }

  componentWillMount = () => {
    this.handleCreateExamples()
  }

  handleScreenWidthChange = (screenWidth) => {
    this.setState({
      screenWidth,
    })
  }

  handleBackgroundChange = (background) => {
    this.setState({
      background,
    })
  }

  handleCreateExamples = () => {
    this.setState({
      examples: this.props.createExamples(),
    })
  }

  render() {
    const {screenWidth, background, examples} = this.state

    return (
      <section>

        <div className='bg-base-secondary pa3 br2 mb4'>

          <div className='mb3'>
            <Heading level='5'>
              Screen Width
            </Heading>
            <div className='flex flex-wrap'>
              {map(screenWidthActions, action => (
                <div 
                  key={action.label}
                  className='mr3 mb3'
                >
                  <Button 
                    onClick={this.handleScreenWidthChange.bind(null, action.screenWidth)}
                    size='extra-small'
                  >
                    {action.label}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className='mb3'>
            <Heading level='5'>
              Background
            </Heading>
            <div className='flex flex-wrap'>
              {map(backgroundActions, action => (
                <div 
                  key={action.label}
                  className='mr3 mb3'
                >
                  <Button 
                    onClick={this.handleBackgroundChange.bind(null, action.background)}
                    size='extra-small'
                  >
                    {action.label}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Heading level='5'>
              Prop Values
            </Heading>
            <Button 
              onClick={this.handleCreateExamples}
              size='extra-small'
            >
              Randomize
            </Button>
          </div>

        </div>

        <div>
          {map(examples, (example, index) => (
            <div
              key={index}
              className='mb4'
            >
              <div 
                className={`
                  dib
                  b--solid b--base-secondary bw2
                  ${background === 'light' ? 'bg-white' : 'bg-base'}
                `}
                style={{
                  width: screenWidth,
                }}
              >
                {example}
              </div>
            </div>
          ))}
        </div>

      </section>
    )
  }
}

export default Examples
