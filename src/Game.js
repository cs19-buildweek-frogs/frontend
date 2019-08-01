import React, { useState, useEffect } from "react";
import axiosWithAuth from "./auth/axiosAuth";
import Map from "./Map";

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
      {/* <div>Game</div> */}

      <div className="roomTitle">{userGame.title}</div>
      {userGame.error_msg ? (
        <div className="errorMessage">{userGame.error_msg}</div>
      ) : (
        <div className="roomDescription">{userGame.description}</div>
      )}
      {userGame.items ? (
        <div className="treasure">🐉 You found the {userGame.items} 🐉</div>
      ) : null}
      <button className="direction" onClick={move} value={"n"}>
        N
      </button>
      <button className="direction" onClick={move} value={"s"}>
        S
      </button>
      <button className="direction" onClick={move} value={"e"}>
        E
      </button>
      <button className="direction" onClick={move} value={"w"}>
        W
      </button>
      <Map currentRoom={userGame.title} />
    </>
  );
}
export default Game;
