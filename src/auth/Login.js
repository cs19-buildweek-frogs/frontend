import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [userObj, setUser] = useState({});

  const handleChange = e => {
    console.log(userObj);
    setUser({
      ...userObj,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = e => {
    console.log(userObj);
    e.preventDefault();
    axios({
      method: "POST",
      // headers: {
      //   "Authorization": token,
      //   "content-type": "application/json"
      // },
      url: `https://lambda-mud-test.herokuapp.com/api/login/`,
      data: userObj
    })
      .then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.key);
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

// {
//   room_name: "",
//   items: "",
//   x: 0,
//   y: 0
// }
