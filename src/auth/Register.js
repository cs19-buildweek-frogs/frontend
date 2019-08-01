import React, { useState } from "react";
import axios from "axios";

function Registration(props) {
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
      .post(`https://mud-be.herokuapp.com/api/registration/`, userObj)
      .then(res => {
        localStorage.setItem("key", res.data.key);
        props.history.push("/protected");
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div className="Login-Page">
      <form className="login-form" onSubmit={handleLogin}>
        <h1 className="Login-Title">Register</h1>
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
          name="password1"
          value={userObj.password1}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="confirm password"
          name="password2"
          value={userObj.password2}
          onChange={handleChange}
        />
        <button className="registerBtn">Register</button>
      </form>
    </div>
  );
}

export default Registration;
