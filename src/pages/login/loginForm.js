import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import LoginBox from './loginBox';

const LoginForm = (props) => {
  const { history, loginRequest } = props;
  const [loading, setLoading] = useState(false);

  const login = (dataForm) => {
    console.log('dataForm', dataForm);
    if(loginRequest){
      loginRequest(dataForm);
      setLoading(true);
    }
  }

  return (
    <div>
      <LoginBox loading={loading} onSubmit={login} />
    </div>
  )
}

export default withRouter(LoginForm)