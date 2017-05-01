import React, {Component} from 'react'
import {map, size, every} from 'lodash'
import Maybe from 'package/components/Maybe'
import Error from 'package/components/Error'
import Button from 'package/components/Button'
import Paragraph from 'package/components/Paragraph'
import Request from 'package/components/Request'

const inputClassNames = 'input-reset pa2 br2 ba b--gray-secondary dark-gray w-100'

const clearedState = {
  title: '',
  technologyId: '',
  summary: '',
  hasMissingInput: false,
}

export default class extends Component {

  state = clearedState

  handleMissingInput = () => {
    this.setState({hasMissingInput: true})
  }

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleTechnologyChange = (event) => {
    this.setState({
      technologyId: event.target.value
    })
  }

  handleSummaryChange = (event) => {
    this.setState({
      summary: event.target.value
    })
  }

  handleResponse = (response) => {
    if(!response) {
      this.setState(clearedState)
    }
  }

  render() {
    const {
      title,
      technologyId,
      summary, 
      hasMissingInput,
    } = this.state
    const {instructor, lessonsUrl, technologiesUrl} = this.props

    return (
      <div>

        <Paragraph>
          Have an idea for an egghead lesson? Fill out this information and get started. Feel free to submit as many ideas as you like.
        </Paragraph>

        <div className='mb3'>
          <div className='b'>
            Title *
          </div>
          <input
            type='text'
            value={title}
            onChange={this.handleTitleChange}
            className={`${inputClassNames}${hasMissingInput ? ' b--red' : ''}`}
          />
        </div>

        <Request url={technologiesUrl}>
          {({data}) => (
            <div className='mb3'>
              <div className='b'>
                Technology *
              </div>
              <select
                value={technologyId}
                onChange={this.handleTechnologyChange}
                className={`${inputClassNames}${hasMissingInput ? ' b--red' : ''}`}
              >
                <option value=''></option>
                {map(data.technologies, (technology) => (
                  <option 
                    key={technology.id}
                    value={technology.id}
                  >
                    {technology.label}
                  </option>
                ))}
              </select>
            </div>
          )}
        </Request>

        <div className='mb3'>
          <div className='b'>
            Summary
          </div>
          <textarea
            type='text'
            rows='5'
            value={summary}
            onChange={this.handleSummaryChange}
            className={inputClassNames}
          />
        </div>

        <Maybe condition={hasMissingInput}>
          <div className='mb3'>
            <Error>
              Missing required form input
            </Error>
          </div>
        </Maybe>

        <Request
          lazy
          method='post'
          url={lessonsUrl}
          body={{
            'lesson': {
              title: title,
              technology_id: technologyId,
              summary: summary,
              instructor_id: instructor.id,
            }
          }}
          onResponse={this.handleResponse}
        >
          {({request}) => (
            <Button
              size='small'
              onClick={() => {
                if(every([title, technologyId], (input) => size(input) > 0)) {
                  request()
                }
                else {
                  this.handleMissingInput()
                }
              }}
            >
              Submit
            </Button>
          )}
        </Request>

      </div>
    )
  }
}
