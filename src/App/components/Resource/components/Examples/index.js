import React, {Component} from 'react'
import {map, includes, size, uniqueId} from 'lodash'
import {
  xsmallContainerWidth,
  smallContainerWidth,
  mediumContainerWidth,
  largeContainerWidth,
  xlargeContainerWidth,
  xxlargeContainerWidth,
} from 'package/utils/hardCodedSizes'
import Heading from 'package/components/Heading'
import Button from 'package/components/Button'

const containerWidthActions = [
  {
    label: 'XSmall',
    containerWidth: xsmallContainerWidth,
  },
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

const containerPaddingActions = [
  {
    label: 'Off',
    containerPadding: false,
  },
  {
    label: 'On',
    containerPadding: true,
  },
]

const containerBoxSizing = 8

export const optOuts = [
  'containerWidth',
  'containerBackground',
  'containerPadding',
  'types',
]

class Examples extends Component {

  state = {
    containerWidth: xsmallContainerWidth,
    containerBackground: 'dark',
    containerPadding: false,
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

  handlePaddingChange = (containerPadding) => {
    this.setState({
      containerPadding,
    })
  }

  handleCreateExamples = () => {
    this.setState({
      examples: this.props.createExamples(),
      renderId: uniqueId(),
    })
  }

  render() {
    const {
      containerWidth, 
      containerBackground, 
      containerPadding, 
      examples, 
      renderId,
    } = this.state
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
                            size='small'
                          >
                            {action.label}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
              }

              {includes(optOut, 'containerPadding')
                ? null
                : <div className='mb2'>
                    <Heading level='5'>
                      Container Padding
                    </Heading>
                    <div className='flex flex-wrap'>
                      {map(containerPaddingActions, action => (
                        <div 
                          key={action.label}
                          className='mr3 mb3'
                        >
                          <Button 
                            onClick={this.handlePaddingChange.bind(null, action.containerPadding)}
                            size='small'
                          >
                            {action.label}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
              }

              {includes(optOut, 'types')
                ? null
                : <div>
                    <Heading level='5'>
                      Types
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
              key={`${renderId}-${index}`}
              className='mb4'
            >
              <div 
                className={`
                  dib
                  b--solid b--base-secondary bw2
                  ${containerBackground === 'light' ? 'bg-gray' : 'bg-base'}
                  ${containerPadding ? 'pa4' : ''}
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
