"use client";
import { useEffect, useState } from "react";

import { getKomikFavorite } from "@/src/repository/manga/mangaRepository";

const useFavoriteService = () => {
  const [listFavorite, setListFavorite] = useState<any>([]);

  const fetchData = async () => {
    //
    const resp = await getKomikFavorite();

    if (resp === null) {
      return null;
    }
    // console.log(resp.result);
    setListFavorite(resp.result.listData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    listFavorite,
  };
};

export default useFavoriteService;
