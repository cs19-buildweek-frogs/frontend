import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [userObj, setUser] = useState({});

  const handleChange = e => {
    setUser({
      ...userObj,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = e => {
    e.preventDefault();
    axios
      .post(`https://lambda-mud-test.herokuapp.com/api/login/`, userObj)
      .then(res => {
        localStorage.setItem("key", res.data.key);
        console.log(res.data.key);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div className="Login-Page">
      <form className="login-form" onSubmit={handleLogin}>
        <h1 className="Login-Title">Login</h1>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={userObj.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={userObj.password}
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
