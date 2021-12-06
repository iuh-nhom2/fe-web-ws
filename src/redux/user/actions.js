import actionTypes from './actionTypes';

const loginRequest = (payload) => ({
  type : actionTypes.LOGIN_REQUEST,
  payload
})

const loginSuccess = (payload) => 
({
  type: actionTypes.LOGIN_SUCCESS,
  payload
})

const loginError = (payload) => ({
  type: actionTypes.LOGIN_ERROR,
  payload
})

const logoutRequest= (payload) => ({
  type:actionTypes.LOGOUT_REQUEST,
  payload

})

const logoutSuccess = (payload) => ({
  type: actionTypes.LOGOUT_SUCCESS,
  payload
})

const logoutError = (payload) => ({
  type: actionTypes.LOGOUT_ERROR,
  payload
})

export {
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
}