import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading} from  'react-redux-loading'
import { addAnsweredQuestion, addQuestionCreated } from './users'

export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion (optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())
    
    return saveQuestion({
      author: authedUser, 
      optionOneText: optionOne,
      optionTwoText: optionTwo
    })
      .then((question) => dispatch(addQuestion(question)))
      .then((question) => dispatch(addQuestionCreated(question, authedUser)))
      .then(() => dispatch(hideLoading()))
  } 
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

function answerQuestion ({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    qid,
    authedUser,
    answer
  }
}

export function handleAnswerQuestion(info){
  return (dispatch, getState) =>  {
    dispatch(showLoading()) 
    return saveQuestionAnswer(info)
      .then(() => dispatch(answerQuestion(info)))
      .then(() => dispatch(addAnsweredQuestion(info)))
      .then(() => dispatch(hideLoading()))
  }  
}