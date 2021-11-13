import { useState, useEffect } from "react";
import { Animal, BreedListAPIResponse } from "./APIResponseTypes";
const localCache: { [index: string]: string[] } = {};

type Status = "unloaded" | "loading" | "loaded";

export default function useBreedlist(animal: Animal): [string[], Status] {
  const [breedlist, setBreedList] = useState([] as string[]);
  const [status, setStatus] = useState("unloaded" as Status);

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      void requestBreedList();
    }
    //dont need to pass animal as parm here, It forms clouser to its parent or else will create a seprate copy which will be undeined
    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");

      const res = await fetch(
        `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = (await res.json()) as BreedListAPIResponse;
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedlist, status];
}
