import { TCharacterResponse } from "../models";

export const fetchCharacters = (page = 1) => {
  return fetch(`https://rickandmortyapi.com/api/character?page=${page}`).then(
    (res) => res.json()
  ) as Promise<TCharacterResponse>;
};
