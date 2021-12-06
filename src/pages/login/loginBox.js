import React, { useState } from "react";
import "./styles/login.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginBox = ({ onSubmit, loading }) => {
  const [inputForm, setInputForm] = useState({
    userName: '',
    password: '',
  })
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputForm)
  }

  const handleOnChangeInput = (e) => {
    setInputForm({
      ...inputForm,
      [e.target.name] : e.target.value
    })
  }
  
  return (
    <div className="login-page">
      <div className="flex flex-col items-center justify-center w-full">
        <form onSubmit={handleOnSubmit} className="loginForm">
          <div className="form-group">
            <label className="input-label">
              Username
              <span className="text-danger">*</span>
            </label>
            <input required type="text" className="form-control" name="userName" onChange={(e) => {handleOnChangeInput(e)}} />
          </div>
          <div className="form-group">
            <label className="input-label">
              Password
              <span className="text-danger">*</span>
            </label>
            <input
              required
              type="password"
              className="form-control"
              name="password"
              onChange={(e) => {handleOnChangeInput(e)}}
            />
          </div>

          <button className="btn btn-login   btn-block mb-3">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginBox;
