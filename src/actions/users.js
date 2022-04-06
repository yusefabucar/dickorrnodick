import { saveUser } from '../utils/api'
import { showLoading, hideLoading} from  'react-redux-loading'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_ANSWER_QUESTION_TO_USER = 'ADD_ANSWER_QUESTION_TO_USER'
export const ADD_QUESTION_CREATED = 'ADD_QUESTION_CREATED'
export const ADD_USER = 'ADD_USER'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

function addUser(user) {
  return {
    type: ADD_USER,
    user
  }
}

export function handleAddUser (username, name, avatarURL) {
  return (dispatch) => {
    
    dispatch(showLoading())

    return saveUser({
      username,
      name,
      avatarURL
    })
      .then((user) => (dispatch(addUser(user))))
      .then( () => (dispatch(hideLoading())))
  }
}

export function addAnsweredQuestion({ authedUser, qid, answer }) {
  return {
    type: ADD_ANSWER_QUESTION_TO_USER,
    authedUser,
    qid,
    answer
  }
}

export function addQuestionCreated( question, authedUser) {
  return {
    type: ADD_QUESTION_CREATED,
    question,
    authedUser
  } 
}