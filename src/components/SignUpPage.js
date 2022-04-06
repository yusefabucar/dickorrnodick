import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { handleAddUser } from '../actions/users'

class SignUpPage extends Component {

  state = {
    username: '',
    name: '',
    avatarURL: '',
    toSignInPage: false
  }
  
  handleChange = (e) => {
    const fieldName = e.target.name
    const fieldValue = e.target.value
    this.setState( () => ({
      ...this.state,
      [fieldName]: fieldValue
    }))
  }

  signUp = (e) => {
    e.preventDefault()
    const { username, name, avatarURL } = this.state

    this.props.dispatch(handleAddUser(username, name, avatarURL))
    this.setState(() => ({
      username: '',
      name: '',
      avatarURL: '',
      toSignInPage: true
    }))
  }
  
  render() {

    if (this.state.toSignInPage === true ) {
      return <Redirect to='/' />
    }

    return(
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign Up</h5>
                <Form className="form-signin" onSubmit={this.signUp}>
                  <Form.Group>
                    <Form.Label>
                      Username
                    </Form.Label>
                    <Form.Control 
                      type="text"
                      name="username"
                      onChange={this.handleChange}
                      />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      onChange={this.handleChange}
                      />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      Avatar URL
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="avatarURL"
                      onChange={this.handleChange}
                      />
                  </Form.Group>                  
                  <Button
                    variant="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit">
                    Sign Up
                  </Button>
                </Form>
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

export default connect(mapStateToProps)(SignUpPage)