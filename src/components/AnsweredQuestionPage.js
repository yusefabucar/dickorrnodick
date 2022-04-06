import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnsweredQuestion from './AnsweredQuestion'

class AnsweredQuestionPage extends Component {
  render() {    
    return (
      <ul>
      {
        this.props.answered_questionIds.map((id) => (
          <li key={id}>
            <AnsweredQuestion id={id} mode='min' />
          </li>
        ))
      }
      </ul> 
    )
  }
}

function mapStateToProps ({authedUser, users, questions }){
  const answered_questions = Object.keys(questions)
    .filter(question => Object.keys(users[authedUser].answers).includes(question))
  return {
    answered_questionIds: answered_questions
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(AnsweredQuestionPage)