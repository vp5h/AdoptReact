import React from "react";

export const Pet = (props) => {
    return React.createElement("div", {}, [
      React.createElement("h3", {}, props.name),
      React.createElement("h3", {}, props.animal),
      React.createElement("h3", {}, props.breed),
    ]);
  };
  