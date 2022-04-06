import React, { Component, Fragment } from 'react'
import Dashboard from './Dashboard'
import { HashRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import SignInPage from './SignInPage'
import LoadingBar from 'react-redux-loading'
import Navigation from './Navigation'
import SignOut from './Signout'
import QuestionPage from './QuestionPage'
import SignUpPage from './SignUpPage'

class App extends Component {
  state = {
    hasError: false
  }

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }

  render() {

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div>
            {this.props.loading === true 
            ? null
            : <div>
                <Navigation />
                <Route path='/' exact component={SignInPage} />
                <Route path='/signout' exact component={SignOut} />
                <Route path='/home' exact component={Dashboard} />
                <Route path='/new' exact component={NewQuestion} />
                <Route path='/question/:id' exact component={QuestionPage} />
                <Route path='/leaderboard' exact component={Leaderboard} />
                <Route path='/signup' exact component={SignUpPage} />
              </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
    authedUser
  }
}

export default connect(mapStateToProps)(App)
