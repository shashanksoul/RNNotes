import * as actionTypes from './actionTypes';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
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

export const loading = (status) => {
  return {
    type: actionTypes.LOADING,
    payload: status,
  };
};

export const login = () => {
  return async (dispatch, getState) => {
    try {
       dispatch(loading(true))
     // dispatch({type: actionTypes.LOADING, payload: true});
      const {email, password} = getState().user;
      if (email != '' && password != '') {
        const response = await auth().signInWithEmailAndPassword(
          email,
          password,
        );
        dispatch({type: actionTypes.LOGIN, payload: response.user});
      } else {
        dispatch({
          type: actionTypes.Error_LOGIN_API,
          payload: "email or password can't be null",
        });
      }
    } catch (e) {
      dispatch({type: actionTypes.Error_LOGIN_API, payload: e.message});
      console.log(e);
    }
  };
};

export const googleLogin = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(loading(true));
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      const response =  auth().signInWithCredential(googleCredential);
      dispatch({type: actionTypes.LOGIN, payload: response.user});
    } catch (e) {
      dispatch({type: actionTypes.Error_LOGIN_API, payload: e});
      console.log(e);
    }
  };
};

export const signup = () => {
  return async (dispatch, getState) => {
    loading(true);
    try {
      const {email, password} = getState().user;
      if (email != '' && password != '') {
        const response = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        loading(false);
        dispatch({type: actionTypes.SIGNUP, payload: response.user});
      } else {
        dispatch({
          type: actionTypes.Error_SIGN_API,
          payload: "email or password can't be null",
        });
      }
    } catch (e) {
      loading(false);
      dispatch({type: actionTypes.Error_SIGN_API, payload: e});
      console.log(e);
    }
  };
};
