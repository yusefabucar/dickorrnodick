import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'

class Leaderboard extends Component {
  render() {
    return (
      <div className="col-sm-11 col-md-9 col-lg-7 mx-auto">
        <h2 className="text-center">Leaderboard</h2>
        <ul>
          {
            this.props.usersId.map((id) => (
              <li key={id}>
                <User id={id} />
              </li>
            ))
          }
        </ul>      
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    usersId: Object.keys(users)
      .sort((a, b) => ( Object.keys(users[b].answers).length + users[b].questions.length ) 
                      - ( Object.keys(users[a].answers).length + users[a].questions.length ) ) 
  }
}

export default connect(mapStateToProps)(Leaderboard)