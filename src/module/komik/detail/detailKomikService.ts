"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { getDetailManga } from "@/src/repository/manga/mangaRepository";

const useDetailKomikService = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop(); // Extracts the last part of the path as the slug
  const [detailKomik, setDetailKomik] = useState<any | null>(null);
  const [isSkeleton, setIsSkeleton] = useState<boolean>(false);

  const fetchData = async () => {
    if (!slug) return; // Do not fetch if slug is not available

    const resp = await getDetailManga(slug || "not-found");

    if (resp === null) {
      return null;
    }
    setDetailKomik(resp.result);
    setIsSkeleton(true);
  };

  useEffect(() => {
    fetchData();
  }, [slug]);

  return {
    slug,
    detailKomik,
    isSkeleton,
  };
};

export default useDetailKomikService;
