import React, { useState, useEffect } from "react";
import axiosWithAuth from "./auth/axiosAuth";
import axios from "axios";
function Game() {
  const [userGame, setUserGame] = useState({});

  useEffect(() => {
    const getUserGame = () => {
      axiosWithAuth()
        .get("https://lambda-mud-test.herokuapp.com/api/adv/init/")

        .then(res => {
          console.log("SERVER RESPONSE IS: ", res.data);
        })
        .catch(error => {
          console.log("HERE GAME", localStorage);
          console.log(error.message);
        });
    };
    getUserGame();
  }, []);
  const move = e => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <>
      <div>Game</div>
      <button value="n" onClick={move}>
        North
      </button>
      {/* <button onClick={getUserGame}>Start game</button> */}
    </>
  );
}
export default Game;
