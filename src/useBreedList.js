import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedlist(animal) {
  const [breedlist, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }
    //dont need to pass animal as parm here, It forms clouser to its parent or else will create a seprate copy which will be undeined
    async function requestBreedList() {
      setBreedList([]);
      setStatus("Loading");

      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("Loaded");
    }
  }, [animal]);

  return [breedlist, status];
}
