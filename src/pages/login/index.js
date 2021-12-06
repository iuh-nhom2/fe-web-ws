import React, { useState, lazy } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

//action 
import { loginRequest } from '../../redux/user/actions';

const LoginForm = lazy(() => import('./loginForm'));

const Login = (props) => {
  const [formLogin, setFormLogin] = useState({
    userName: '',
    password: '',
  });

  return (
    <div>
      <Route 
        exact 
        path={'/login'}
        render={(exProps) => 
          <div>
            <LoginForm {...props} {...exProps} />
          </div>
        }
      />
    </div>
  )
}

const mapStateToProps = state => {
  console.log('state', state);
  return {
    user : state.user
  }
}

const mapDispatchToProps = dispath => {
  return {
    loginRequest : bindActionCreators(loginRequest, dispath),
  }
} 


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));