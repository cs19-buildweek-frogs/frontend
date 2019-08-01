import React, { useState, useEffect } from "react";
import axiosWithAuth from "./auth/axiosAuth";

// const buildMap = (x,y) => {

// }
const coordinates = [
  { room: "a", x: 0, y: 0 },
  { room: "b", x: 0, y: 1 },
  { room: "c", x: 0, y: 2 },
  { room: "d", x: 3, y: 4 }
];

// const currentRoom = "a";

function Map({ currentRoom }) {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("https://mud-be.herokuapp.com/api/adv/rooms/")

      .then(res => {
        console.log("SERVER RESPONSE IS: ", res.data);
        setRooms(res.data);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);
  return (
    <>
      <div
        className="map-container"
        style={{
          position: "relative",
          width: "500px",
          height: "300px",
          margin: "0 auto"
        }}
      >
        {rooms.map(item => {
          let roomNumber = item.title.split(" ");
          let { x, y } = item;
          x *= 30;
          y *= 30;
          let styles;
          if (item.title === currentRoom) {
            styles = {
              position: "absolute",
              bottom: y,
              left: x,
              width: "20px",
              height: "20px",
              background: "red",
              borderRadius: "100%"
            };
          } else {
            styles = {
              position: "absolute",
              bottom: y,
              left: x,
              width: "20px",
              height: "20px",
              background: "yellow",
              borderRadius: "100%"
            };
          }
          return (
            <div key={item.title} style={styles} name={item.room}>
              {roomNumber[1]}
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Map;
