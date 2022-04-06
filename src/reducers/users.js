import { RECEIVE_USERS, ADD_ANSWER_QUESTION_TO_USER, ADD_QUESTION_CREATED, ADD_USER } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_QUESTION_CREATED:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: state[action.authedUser].questions.concat(action.question)
        }
      }
    case ADD_ANSWER_QUESTION_TO_USER :
      return {
        ...state,
        [action.authedUser] : {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]:action.answer
          }
        }
      }
    case ADD_USER:
      return {
        ...state,
        [action.user.id]: action.user
      }
    default:
      return state
  }
}