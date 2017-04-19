import React, {Component} from 'react'
import {map, includes, size} from 'lodash'
import {
  smallContainerWidth,
  mediumContainerWidth,
  largeContainerWidth,
  xlargeContainerWidth,
  xxlargeContainerWidth,
} from 'utils/hardCodedSizes'
import Heading from 'components/Heading'
import Button from 'components/Button'

const containerWidthActions = [
  {
    label: 'Small',
    containerWidth: smallContainerWidth,
  },
  {
    label: 'Medium',
    containerWidth: mediumContainerWidth,
  },
  {
    label: 'Large',
    containerWidth: largeContainerWidth,
  },
  {
    label: 'XLarge',
    containerWidth: xlargeContainerWidth,
  },
  {
    label: 'XXLarge',
    containerWidth: xxlargeContainerWidth,
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

const containerBoxSizing = 8

export const optOuts = [
  'containerWidth',
  'containerBackground',
  'arguments',
]

class Examples extends Component {

  state = {
    containerWidth: smallContainerWidth,
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
    const {optOut} = this.props

    return (
      <section>

        {size(optOut) < size(optOuts)
          ? <div className='bg-base-secondary pa3 br2 mb4'>

              {includes(optOut, 'containerWidth')
                ? null
                : <div className='mb2'>
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
              }

              {includes(optOut, 'containerBackground')
                ? null
                : <div className='mb2'>
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
              }

              {includes(optOut, 'arguments')
                ? null
                : <div>
                    <Heading level='5'>
                      Arguments
                    </Heading>
                    <Button 
                      onClick={this.handleCreateExamples}
                      size='extra-small'
                    >
                      Randomize
                    </Button>
                  </div>
              }

            </div>
          : null
        }

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
                  width: containerWidth + containerBoxSizing,
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
