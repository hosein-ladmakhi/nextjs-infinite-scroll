import Image from "next/image";
import { TCharacter } from "../models";
import { FC } from "react";

interface IProps {
  character: TCharacter;
}

const Card: FC<IProps> = ({ character }) => {
  return (
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
  );
};

export default Card;
