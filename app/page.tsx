import React from "react";
import Paginator from "./components/Paginator";
import CardList from "./components/CardList";

import { fetchCharacters } from "./services";

export default async function HomePage() {
  const characters = await fetchCharacters();

  return (
    <div className="container mx-auto my-5">
      <h1 className="font-bold text-xl">Characters</h1>
      <CardList characters={characters.results} />
      <Paginator />
    </div>
  );
}
