import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { handleSignIn } from '../actions/authedUser'
import { connect } from 'react-redux'

class SignOut extends Component {
  componentDidMount() {
    this.props.dispatch(handleSignIn(''))
  }

  render() {
    return (
      <Redirect to='/' />
    )
  }
}

export default connect()(SignOut)