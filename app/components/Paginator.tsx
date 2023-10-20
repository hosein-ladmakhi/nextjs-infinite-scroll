"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import { TCharacter } from "../models";
import { fetchCharacters } from "../services";
import CardList from "./CardList";

interface IProps {}

const Paginator: FC<IProps> = ({}) => {
  const paginatorRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<TCharacter[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const intersectionCallback = (entry: IntersectionObserverEntry[]) => {
      if (entry[0].isIntersecting) {
        setCurrentPage((prev) => prev + 1);
      }
    };
    const intersectionObserver = new IntersectionObserver(
      intersectionCallback,
      { rootMargin: "0px", threshold: 1 }
    );

    intersectionObserver.observe(paginatorRef.current!);

    return () => {
      intersectionObserver.unobserve(paginatorRef.current!);
    };
  }, []);

  useEffect(() => {
    if (hasNextPage) {
      fetchCharacters(currentPage).then((data) => {
        setHasNextPage(!!data.info.next);
        setData((prev) => [...prev!, ...data.results]);
      });
    }
  }, [currentPage, hasNextPage]);

  return (
    <>
      <CardList characters={data} />
      <div ref={paginatorRef} className="h-28 w-full my-5"></div>
    </>
  );
};

export default Paginator;
