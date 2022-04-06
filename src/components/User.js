import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'

class User extends Component {
  render() {
    const { user } = this.props
    
    if (user === null) {
      return <p> This user does not exist </p>
    }

    const { name, answers, questions } = user 
    const answered = Object.keys(answers).length
    const created = questions.length
    const score  = answered + created
    
    return (
      <div className="card card-question my-2 user-card">
        <Container>
          <Row>
            <Col className="col-user-card">
              <img 
                src={user.avatarURL}
                alt={`Avatar of ${name}`}
                className="user-avatar"
              />
            </Col>
            <Col  className="col-user-card" xs="6">
              <h4 className=" card-title text-center">{name}</h4>
                Questions Answered: {answered}
                <hr className="my-2"/>
                Questions Created: {created}
            </Col>
            <Col>
              <h4 className="text-center">Score</h4>
              <div className="user-score text-center">
                <p>
                  {score}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}



function mapStateToProps({authedUser, users}, { id }) {
  const user = users[id]
  return {
    authedUser,
    user: user
  }
}

export default connect(mapStateToProps)(User)