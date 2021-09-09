/* eslint-disable react/prop-types */
import { Pet } from "./Pet";

const Result = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No pet found</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
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
