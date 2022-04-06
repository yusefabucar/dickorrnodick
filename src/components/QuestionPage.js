import React, { Component } from 'react'
import { connect } from 'react-redux'
import UnansweredQuestion from './UnansweredQuestion'
import AnsweredQuestion from './AnsweredQuestion'

class QuestionPage extends Component {
  render() {
    const { id, isAnswered } = this.props
    
    return (
      <div className="col-sm-11 col-md-9 col-lg-7 mx-auto dashboard">
        { isAnswered === true
            ? <AnsweredQuestion id={id} mode='max' />
            : <UnansweredQuestion id={id} mode='max'/>}
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions, users}, props) {
  const { id } = props.match.params
  const isAnswered = Object.keys(users[authedUser].answers).includes(id)
  return {
    id,
    isAnswered
  }
}

export default connect(mapStateToProps)(QuestionPage)