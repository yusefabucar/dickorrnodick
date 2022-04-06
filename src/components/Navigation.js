import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'

class Navigation extends Component {

  render() {
    const { loggedUser } = this.props

    if ( this.props.location.pathname === '/'
        || this.props.location.pathname === '/signup' ) {
      return <div></div>
    }
     
    return (
      <div className="app-nav"> 
        <NavLink 
          className="app-nav-item" 
          to="/home">
          Home
        </NavLink>
        <NavLink 
          className="app-nav-item"
          to="/new">
          New Question
        </NavLink>
        <NavLink 
          className="app-nav-item"
          to="/leaderboard">
          Leaderboard
        </NavLink>
        <NavLink 
          className="app-nav-item"
          to="/signout">
          Sign Out
        </NavLink>
        <NavLink
          className="app-nav-item app-nav-last-item"
          to="#">
          {loggedUser.name}
          <img 
            src={loggedUser.avatarURL}
            alt={`Avatar of ${loggedUser.name}`}
            className='app-nav-avatar'
          />
        </NavLink>
      </div>
    )
  }
} 

function mapStateToProps({users, authedUser}) {
  return {
    loggedUser: users[authedUser] 
  }
}

export default withRouter(connect(mapStateToProps)(Navigation))