import * as actionTypes from './actionTypes';
import Firebase from '../config/config';

// this is what our action should look like which dispatches the "payload" to reducer

export const updateSignedState = (state) => {
  return {
    type: actionTypes.CHECK_LOGIN_STATUS,
    payload: state,
  };
};

export const updateEmail = (email) => {
  return {
    type: actionTypes.UPDATE_EMAIL,
    payload: email,
  };
};

export const updatePassword = (password) => {
  return {
    type: actionTypes.UPDATE_PASSWORD,
    payload: password,
  };
};

export const loading = status => {
  return {
    type: actionTypes.LOADING,
    payload:status
  }
}

export const login = () => {
  return async (dispatch, getState) => {
   
    try {
      dispatch({type: actionTypes.LOADING, payload: true});
      const {email, password} = getState().user;
      const response = await Firebase.auth().signInWithEmailAndPassword(
        email,
        password,
      );
      dispatch({type: actionTypes.LOGIN, payload: response.user});
    } catch (e) {
      dispatch({type: actionTypes.Error_LOGIN_API, payload: e});
      console.log(e);
    }
  };
};

export const signup = () => {
  return async (dispatch, getState) => {
    loading(true)
    try {
      const {email, password} = getState().user;
      const response = await Firebase.auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      loading(false)
      dispatch({type: actionTypes.SIGNUP, payload: response.user});
    } catch (e) {
      loading(false)
      dispatch({type: actionTypes.Error_SIGN_API, payload: e});
      console.log(e);
    }
  };
};
