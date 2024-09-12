"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { getDetailChapterManga } from "@/src/repository/manga/mangaRepository";

const useDetailChapterKomikService = () => {
  const [detailChapter, setDetailChapter] = useState<any | null>(null);

  const pathname = usePathname(); // Get the full path of the URL

  const pathParts = pathname.split("/"); // Split the path into segments
  const slugKomik = pathParts[2]; // Get the third segment for 'slug-komik'
  const slugChapter = pathParts[3];

  const fetchData = async () => {
    const resp = await getDetailChapterManga(slugKomik, slugChapter);
    // Fetch data logic here

    // console.log("ResponseService")

    if (resp === null) {
      // Handle error
      return;
    }

    setDetailChapter(resp.result);
  };

  useEffect((): void => {
    fetchData(); // Fetch data whenever the component mounts
  }, []); // Trigger fetching when slugs are set

  return {
    slugKomik,
    slugChapter,
    detailChapter,
  };
};

export default useDetailChapterKomikService;
