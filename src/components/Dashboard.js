import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnsweredQuestionPage from './AnsweredQuestionPage'
import UnansweredQuestionPage from './UnansweredQuestionPage'
import { Nav } from 'react-bootstrap'

class Dashboard extends Component {
  state = {
    showing: "unanswered"
  }

  handleSwitchTab = (e) => {
    this.setState(() => ({
      showing: e
    })
    )
  }

  render() {
    const { showing } = this.state

    return (
      <div className="col-sm-11 col-md-9 col-lg-7 mx-auto dashboard">
        <Nav 
          fill
          variant="tabs"
          className="dashboard-nav"
          onSelect={this.handleSwitchTab}>
          <Nav.Item>
            <Nav.Link 
              eventKey="unanswered"
              className="dashboard-nav-item"
              active={showing === 'unanswered'}>
              Unanswered Questions
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              eventKey="answered"
              className="dashboard-nav-item"
              active={showing === 'answered'}>
              Answered Questions
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div>
          {
            showing === "unanswered"
              ? <UnansweredQuestionPage />
              : <AnsweredQuestionPage />
          }
        </div>
      </div>
    )
  }
}

export default connect()(Dashboard)