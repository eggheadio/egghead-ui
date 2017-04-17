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

const containerWidthActions = [
  {
    label: 'Minimum',
    containerWidth: minimumScreenWidth,
  },
  {
    label: 'Small',
    containerWidth: smallScreenWidth,
  },
  {
    label: 'Large',
    containerWidth: largeScreenWidth,
  },
  {
    label: 'XLarge',
    containerWidth: xlargeScreenWidth,
  },
]

const containerBackgroundActions = [
  {
    label: 'Dark',
    containerBackground: 'dark',
  },
  {
    label: 'Light',
    containerBackground: 'light',
  },
]

class Examples extends Component {

  state = {
    containerWidth: minimumScreenWidth,
    containerBackground: 'dark',
    examples: false,
  }

  componentWillMount = () => {
    this.handleCreateExamples()
  }

  handleContainerWidthChange = (containerWidth) => {
    this.setState({
      containerWidth,
    })
  }

  handleBackgroundChange = (containerBackground) => {
    this.setState({
      containerBackground,
    })
  }

  handleCreateExamples = () => {
    this.setState({
      examples: this.props.createExamples(),
    })
  }

  render() {
    const {containerWidth, containerBackground, examples} = this.state

    return (
      <section>

        <div className='bg-base-secondary pa3 br2 mb4'>

          <div className='mb2'>
            <Heading level='5'>
              Container Width
            </Heading>
            <div className='flex flex-wrap'>
              {map(containerWidthActions, action => (
                <div 
                  key={action.label}
                  className='mr3 mb3'
                >
                  <Button 
                    onClick={this.handleContainerWidthChange.bind(null, action.containerWidth)}
                    size='extra-small'
                  >
                    {action.label}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className='mb2'>
            <Heading level='5'>
              Container Background
            </Heading>
            <div className='flex flex-wrap'>
              {map(containerBackgroundActions, action => (
                <div 
                  key={action.label}
                  className='mr3 mb3'
                >
                  <Button 
                    onClick={this.handleBackgroundChange.bind(null, action.containerBackground)}
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
                  ${containerBackground === 'light' ? 'bg-gray' : 'bg-base'}
                `}
                style={{
                  width: containerWidth,
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
