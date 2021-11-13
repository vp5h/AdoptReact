/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { FunctionComponent } from "react";

interface Iprops {
  id: number;
  name: string;
  animal: string;

  breed: string;
  images: string[];
  location: string;
}

export const Pet: FunctionComponent<Iprops> = ({
  name,
  animal,
  breed,
  images,
  location,
  id,
}) => {
  let hero = "https://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name}></img>
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} -${breed} -${location}`}</h2>
      </div>
    </Link>
  );
};
