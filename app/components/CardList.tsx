import React, { FC } from "react";
import { TCharacter } from "../models";
import Image from "next/image";

interface IProps {
  characters: TCharacter[];
}

const CardList: FC<IProps> = ({ characters }) => {
  return React.Children.toArray(
    characters.map((character) => (
      <div className="flex my-5 items-center">
        <div className="relative h-28 w-28 mr-4">
          <Image
            alt={character.name}
            style={{ objectFit: "cover" }}
            fill
            src={character.image}
          />
        </div>
        <div>
          <h1 className="font-bold text-gray-500">{character.name}</h1>
          <p className="text-gray-500">{character.gender}</p>
        </div>
      </div>
    ))
  );
};

export default CardList;
