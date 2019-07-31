import React from "react";

// const buildMap = (x,y) => {

// }
const coordinates = [
  { room: "a", x: 0, y: 0 },
  { room: "b", x: 0, y: 1 },
  { room: "c", x: 0, y: 2 },
  { room: "d", x: 3, y: 4 }
];

const currentRoom = "a";

function Map() {
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
        {coordinates.map(item => {
          let { x, y } = item;
          x *= 30;
          y *= 30;
          let styles;
          if (item.room === currentRoom) {
            styles = {
              position: "absolute",
              bottom: x,
              left: y,
              width: "20px",
              height: "20px",
              background: "red",
              borderRadius: "100%"
            };
          } else {
            styles = {
              position: "absolute",
              bottom: x,
              left: y,
              width: "20px",
              height: "20px",
              background: "yellow",
              borderRadius: "100%"
            };
          }
          return (
            <div key={item.y} style={styles}>
              {item.room}
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Map;
