import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSignIn } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'
import { Button, Dropdown, DropdownButton } from 'react-bootstrap'

class SignInPage extends Component {

  state = {
    selectedOption: this.props.usernames[0],
    toHome: false,
    toSignUpPage: false
  }

  handleChange = (e) => {
    this.setState(() => ({
      ...this.state,
      selectedOption: e
    }))
  }

  signIn = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const { selectedOption } = this.state
    dispatch(handleSignIn(selectedOption))
    this.setState(() =>({
      selectedOption: '',
      toSignUpPage: false,
      toHome: true
    }))
  }

  goToSignUp = (e) => {
    e.preventDefault()
    this.setState(() => ({
      selectedOption: '',
      toHome: false,
      toSignUpPage: true
    }))
  }

  render() {
    const { selectedOption, toHome, toSignUpPage } = this.state
    const { users } = this.props
    if ( toHome === true) {
      return <Redirect to='/home' />
    }
    if ( toSignUpPage === true) {
      return <Redirect to='/signup' />
    }


    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Would You Rather?</h5>
                <img
                  src={users[selectedOption].avatarURL}
                  alt={`Avatar of ${selectedOption}`}
                  className="signin-avatar"/>
                <form className="form-signin" onSubmit={this.signIn}>
                  <div className="form-label-group">
                    <DropdownButton
                      title={this.state.selectedOption}
                      variant="outline-primary btn-block">
                      {
                        this.props.usernames.map((username) => (
                          <Dropdown.Item
                            key={username}
                            eventKey={username}
                            value={username}
                            onSelect={this.handleChange}>
                          {username}
                          </Dropdown.Item>
                        ))
                      }
                    </DropdownButton>
                  </div>
                  <Button
                    variant="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit">
                    Login
                  </Button>
                  <Button
                    variant="btn btn-lg btn-primary btn-block text-uppercase"
                    href="/signup"
                    onClick={this.goToSignUp}>
                    Sign Up
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({users}) {
  return {
    usernames: Object.keys(users),
    users
  }
}

export default connect(mapStateToProps)(SignInPage)