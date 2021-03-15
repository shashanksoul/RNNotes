import * as actionTypes from './actionTypes';
import Firebase from '../config/config'

// this is what our action should look like which dispatches the "payload" to reducer
export const updateEmail = email => {
  return {
      type: actionTypes.UPDATE_EMAIL,
      payload: email
  }
}

export const updatePassword = password => {
  return {
      type: actionTypes.UPDATE_PASSWORD,
      payload: password
  }
}

export const login = () => {
  return async (dispatch, getState) => {
      try {
          const { email, password } = getState().user
          const response = await Firebase.auth().signInWithEmailAndPassword(email, password)
          dispatch({ type: actionTypes.LOGIN, payload: response.user })
      } catch (e) {
          console.log(e)
      }
  }
}

export const signup = () => {
  return async (dispatch, getState) => {
      try {
          const { email, password } = getState().user
          const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)
          dispatch({ type: actionTypes.SIGNUP, payload: response.user })
      } catch (e) {
          console.log(e)
      }
  }
}