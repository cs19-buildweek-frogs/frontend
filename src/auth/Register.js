import React, { useState } from "react";
import axios from "axios";

function Registration() {
  const [userObj, setUser] = useState({});

  const handleChange = e => {
    setUser({
      ...userObj,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = e => {
    e.preventDefault();
    // axios({
    //   method: "POST",
    //   url: `https://lambda-mud-test.herokuapp.com/api/registration/`,
    //   data: userObj
    // })
    axios
      .post(`https://lambda-mud-test.herokuapp.com/api/registration/`, userObj)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("key", res.data.key);
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
        <button>Register</button>
      </form>
    </div>
  );
}

export default Registration;
