/* eslint-disable react/prop-types */
import { Pet } from "./Pet";
import {Pet as PetType} from "./APIResponseTypes";
import { FunctionComponent } from "react";
const Result: FunctionComponent<{ pets: PetType[] }> = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No pet found</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            key={pet.id}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Result;
