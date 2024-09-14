"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@nextui-org/react";

import useFavoriteService from "@/src/module/favorite/favoriteService";

const FavoriteView = () => {
  const { listFavorite } = useFavoriteService();

  if (!listFavorite) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`flex flex-col px-5 py-10 justify-center items-center`}>
      <div className={`container`}>
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-4`}>
          {listFavorite.map((item: any, index: number) => (
            <Link key={index} href={`/komik/` + item.id}>
              <div className={`flex flex-col justify-center items-center`}>
                <Image
                  alt={`Gambar ` + item.judul}
                  height={250}
                  src={item.urlGambar}
                  width={150}
                />
                <div>{item.judul}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoriteView;
