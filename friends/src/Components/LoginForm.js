import React, { useState } from "react";
import {axiosWithAuth} from "../utils/utils";

const LoginForm = props => {
  const [creds, setCreds] = useState({username:"", password:""});

  const login = e => {
    e.preventDefault()
    axiosWithAuth().post('http://localhost:5000/api/login', creds)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        props.history.push('/friends')
      })
      .catch(err => console.log(err))
  }

  const handleChange = e => {
    setCreds({...creds, [e.target.name]: e.target.value})
  };

  return(
    <form onSubmit={login}>
      <input type="text" name="username" value={creds.username} onChange={handleChange}/>
      <input type="password" name="password" value={creds.password} onChange={handleChange}/>
      <button>Log In</button>
    </form>
  )
};

export default LoginForm;