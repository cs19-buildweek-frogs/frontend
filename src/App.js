import React from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </header>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  );
}

export default withRouter(App);
