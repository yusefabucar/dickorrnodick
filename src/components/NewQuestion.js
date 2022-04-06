import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'

class NewQuestion extends Component {
  
  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false
  }

  handleChange = (e) => {
    const text = e.target.value
    if (e.target.id === 'optionOne') {
      this.setState(() => ({
        ...this.state,
        optionOne: text,

      }))
    }
    else {
      this.setState(() => ({
        ...this.state,
        optionTwo: text
      }))
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { optionOne, optionTwo } = this.state
    const { dispatch, id } = this.props

    dispatch(handleAddQuestion(optionOne, optionTwo))

    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
      toHome: id ? false : true,
    }))
  }

  render() {

    const { optionOne, optionTwo, toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/home' />
    }

    return (
      <div className="col-sm-11 col-md-9 col-lg-7 mx-auto">
        <div className="card card-question my-3">
          <div className="card-body">
            <div className="question-header">
            </div>
            <h4 className="card-title text-center">Would you rather ...</h4>
            <Form onSubmit={this.handleSubmit}>
              <Form.Control
                required
                type="text"
                placeholder="Option One"
                id="optionOne"
                value={optionOne}
                onChange={this.handleChange} />
              <hr className="my-4"/>
              <Form.Control
                required
                type="text"
                placeholder="Option Two"
                id="optionTwo"
                value={optionTwo}
                onChange={this.handleChange} />
              <Button 
                type="submit"
                className="new-question-button"
                variant="btn btn-lg btn-primary btn-block text-uppercase"
                disabled={optionOne === '' || optionTwo === ''}>
                Create New Question
              </Button>
            </Form> 
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(NewQuestion)