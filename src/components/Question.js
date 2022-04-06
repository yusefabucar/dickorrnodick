import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'

class Question extends Component {
  render() {
    const { question } = this.props

    if (question === null) {
      return <p> This question does not exist </p>
    }

    const { name, id, timestamp, avatar, optionOne, optionTwo } = question 

    return (
      <div className="question">
        <div className="question-header">   
          <img 
            src={avatar}
            alt={`Avatar of ${name}`}
            className='avatar'
          />
          <div className="header-info">
            <span>{name} ask:</span>
            <div>{formatDate(timestamp)}</div> 
          </div>
        </div>
        <div className='question-body'>
          <h3>Would You Rather ..</h3>
          <form>
            <input type="radio" name="answer" value="o1" />{optionOne.text} <br />
            <input type="radio" name="answer" value="o2" />{optionTwo.text} <br />
            <button type="submit" name="submit">Submit</button> 
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps({authedUser, users, questions}, { id }) {
  const question = questions[id]
  return {
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null
  }
}

export default connect(mapStateToProps)(Question)