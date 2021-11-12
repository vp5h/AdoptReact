/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
export const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = "https://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="pet relative block ">
      <div className="image-container">
        <img src={hero} alt={name}></img>
      </div>
      <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-white to-transparent pr-2 pt-2">
        <h1>{name}</h1>
        <h2>{`${animal} -${breed} -${location}`}</h2>
      </div>
    </Link>
  );
};
