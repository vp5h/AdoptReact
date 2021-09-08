import React from "react";
import ReactDOM from "react-dom";
import { Pet } from "./Pet";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="doink" animal="cat" breed="mix" />
      <Pet name="doink" animal="cat" breed="mix" />
      <Pet name="doink" animal="cat" breed="mix" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
