import React from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Game from "./Game";
import PrivateRoute from "./PrivateRoute";
import "./App.css";

function App(props) {
  const logOut = e => {
    e.preventDefault();
    localStorage.removeItem("key");
    console.log(props.history);
    props.history.push("/login");
  };
  return (
    <div className="App">
      <header>
        {!localStorage.getItem("key") && (
          <div className="nav-link">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </div>
        )}
        <NavLink to="/protected">Game</NavLink>
        <button
          className={
            localStorage.getItem("key") ? "loginOutBtn" : "displayNone"
          }
          onClick={logOut}
        >
          Log out
        </button>
      </header>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute exact path="/protected" component={Game} />
    </div>
  );
}

export default withRouter(App);

// Login or Register need to redirect to Game if localstorage has a key
// When click on game should start a new game ?
