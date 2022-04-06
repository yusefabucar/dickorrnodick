import React, { Component } from 'react'
import { connect } from 'react-redux'
import UnansweredQuestion from './UnansweredQuestion'

class UnansweredQuestionPage extends Component {
  render() {
    return (
        <ul>
        {
          this.props.unanswered_questionIds.map((id) => (
            <li key={id}>
              <UnansweredQuestion id={id} mode='min' />
            </li>
          ))
        }
      </ul>
    )
  }
}

function mapStateToProps({authedUser, users, questions }) {
  const unanswered_questions = Object.keys(questions)
    .filter(question => !Object.keys(users[authedUser].answers).includes(question))
  return {
    unanswered_questionIds: unanswered_questions
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)   
  }
}

export default connect(mapStateToProps)(UnansweredQuestionPage)