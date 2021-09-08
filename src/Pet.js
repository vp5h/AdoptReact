// import React from "react";

// export const Pet = (props) => {
//     return React.createElement("div", {}, [
//       React.createElement("h3", {}, props.name),
//       React.createElement("h3", {}, props.animal),
//       React.createElement("h3", {}, props.breed),
//     ]);
//   };

export const Pet = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};
