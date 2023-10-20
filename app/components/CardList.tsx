import React, { FC } from "react";
import { TCharacter } from "../models";
import Card from "./Card";

interface IProps {
  characters: TCharacter[];
}

const CardList: FC<IProps> = ({ characters }) => {
  return React.Children.toArray(
    characters.map((character) => <Card character={character} />)
  );
};

export default CardList;
