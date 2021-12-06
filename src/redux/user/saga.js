import { all, takeEvery, put, fork, take, call } from 'redux-saga/effects';
import createClient from '../../apollo/applloClient';
import actionTypes from './actionTypes';

import LOGIN_USER from '../../apollo/mutation/login';
import { loginSuccess } from './actions';
import { useHistory } from 'react-router-dom';

async function loginFunction (payload) {
  try {
    const client = createClient();
    const result = await client.mutate({
      mutation: LOGIN_USER,
      variables: {
        userName: payload.userName,
        password: payload.password,
      }
    })
    return result;
  }catch(error) {
    console.log('error', error)
  }
}

export function* loginRequest({payload, callback}) {
  try{
    console.log('payload', payload)

    const resultLogin = yield call(loginFunction, payload);
    console.log('resultLogin', resultLogin);
    if(resultLogin?.data?.userLogin?.token && resultLogin?.data?.userLogin?.token !== '') {
      yield put(loginSuccess(resultLogin.data.userLogin));
      window.localStorage.setItem("token", resultLogin.data.userLogin.token);
      
    }
  }catch(error) {
    console.log('error', error);
  }
}

function* watchTask(event) {
  while(true) {
    yield take(event)
  }
}

export default function* rootSaga(){
  yield all([
    yield fork(watchTask, actionTypes.LOGIN_REQUEST),
    yield takeEvery(actionTypes.LOGIN_REQUEST, loginRequest)
  ])
}