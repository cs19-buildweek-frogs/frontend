import React from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Game from "./Game";
import PrivateRoute from "./PrivateRoute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/protected">Game</NavLink>
      </header>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute exact path="/protected" component={Game} />
    </div>
  );
}

export default withRouter(App);
