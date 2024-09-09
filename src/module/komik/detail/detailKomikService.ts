"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { getDetailManga } from "@/src/repository/manga/mangaRepository";

const useDetailKomikService = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop(); // Extracts the last part of the path as the slug
  const [detailKomik, setDetailKomik] = useState<any | null>(null);

  const fetchData = async () => {
    if (!slug) return; // Do not fetch if slug is not available

    const resp = await getDetailManga(slug || "not-found");

    if (resp === null) {
      // Handle error
      return;
    }
    setDetailKomik(resp);
  };

  useEffect(() => {
    fetchData();
  }, [slug]);

  return {
    slug,
    detailKomik,
  };
};

export default useDetailKomikService;
