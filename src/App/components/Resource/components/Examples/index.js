import React, {Component} from 'react'
import {map} from 'lodash'
import Button from 'components/Button'

class Examples extends Component {

  state = {
    examples: false,
  }

  componentWillMount = () => {
    this.createExamples()
  }

  createExamples = () => {
    this.setState({
      examples: this.props.createExamples(),
    })
  }

  render() {
    const {examples} = this.state
    return (
      <section>

        <div className='mb4'>
          <Button 
            onClick={this.createExamples}
            size='extra-small'
          >
            Randomize Prop Values
          </Button>
        </div>

        <div className='mb4'>
          {map(examples, (example, index) => (
            <div
              key={index}
              className='mb4'
            >
              <span className='bg-base-secondary'>
                {example}
              </span>
            </div>
          ))}
        </div>
      </section>
    )
  }
}

export default Examples
