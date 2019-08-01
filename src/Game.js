import React, { useState, useEffect } from "react";
import axiosWithAuth from "./auth/axiosAuth";

function Game() {
  const [userGame, setUserGame] = useState({});

  const [newDirection, setNewDirection] = useState(null);

  useEffect(() => {
    const getUserGame = () => {
      axiosWithAuth()
        .get("https://mud-be.herokuapp.com/api/adv/init/")

        .then(res => {
          setUserGame(res.data);
        })
        .catch(error => {
          console.log(error.message);
        });
    };
    getUserGame();
  }, []);

  useEffect(() => {
    const postUserLocation = () => {
      axiosWithAuth()
        .post("https://mud-be.herokuapp.com/api/adv/move/", newDirection)

        .then(res => {
          setUserGame(res.data);
        })
        .catch(error => {
          console.log(error.message);
        });
    };
    if (newDirection) {
      postUserLocation();
    }
  }, [newDirection]);

  const move = e => {
    e.preventDefault();
    setNewDirection({ direction: e.currentTarget.value });
  };

  return (
    <>
      <div>Game</div>

      <div>{userGame.title}</div>
      {userGame.error_msg ? (
        <div>{userGame.error_msg}</div>
      ) : (
        <div>{userGame.description}</div>
      )}
      <button onClick={move} value={"n"}>
        N
      </button>
      <button onClick={move} value={"s"}>
        S
      </button>
      <button onClick={move} value={"e"}>
        E
      </button>
      <button onClick={move} value={"w"}>
        W
      </button>
    </>
  );
}
export default Game;
