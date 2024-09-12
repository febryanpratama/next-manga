"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "@nextui-org/skeleton";

import useDetailMangaService from "./detailKomikService";

const DetailKomikService = () => {
  const { slug, detailKomik, isSkeleton } = useDetailMangaService();

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-2/3 p-4 md:h-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 px-2 py-2">
              {/* Image Skeleton Loader */}
              <Skeleton
                className="md:col-span-1 items-center mx-auto"
                isLoaded={!!detailKomik}
              >
                {detailKomik ? (
                  <Image
                    alt="Thumbnail"
                    className="rounded-2xl border-2 border-fixed"
                    height={295}
                    src={detailKomik.tumbnail}
                    width={236}
                  />
                ) : (
                  <div className="rounded-2xl border-2 border-fixed bg-gray-200 h-[295px] w-[236px]" />
                )}
              </Skeleton>
              <div className="md:col-span-2">
                <Skeleton isLoaded={!!detailKomik}>
                  <div className="text-2xl font-bold text-justify">
                    {detailKomik?.dataDetail.judul || "Loading title..."}
                  </div>
                </Skeleton>
                <Skeleton className="mt-4" isLoaded={!!detailKomik}>
                  <div className="flex justify-start mt-8 gap-4">
                    <div className="px-4 text-primary rounded-2xl font-semibold py-2 border-1 border-primary">
                      {detailKomik?.dataDetail.jenisKomik || "Loading..."}
                    </div>
                    <div className="px-4 text-secondary rounded-2xl font-semibold py-2 border-1 border-secondary">
                      {detailKomik?.dataDetail.status || "Loading..."}
                    </div>
                    <div className="px-4 text-primary rounded-2xl font-semibold py-2 border-1 border-primary">
                      {detailKomik?.dataDetail.ilustrator || "Loading..."}
                    </div>
                    <div className="px-4 text-secondary rounded-2xl font-semibold py-2 border-1 border-secondary">
                      {detailKomik?.dataDetail.jumlahPembaca || "Loading..."}
                    </div>
                  </div>
                </Skeleton>
                <hr className="mt-5" />
                <Skeleton className="mt-4" isLoaded={!!detailKomik}>
                  <div className="text-justify mt-8">
                    {detailKomik?.dataDetail.sinopsis || "Loading synopsis..."}
                  </div>
                </Skeleton>
              </div>
            </div>
          </div>

          <div className="w-full relative md:w-1/3 md:h-auto mt-8">
            <div className="absolute text-2xl top-0 flex w-full bg-fixed rounded-t-xl h-20 py-5 justify-start" />
            <div className="absolute text-2xl top-0 flex w-full py-5 justify-start">
              <div className="text-textwhiteblack font-bold tracking-widest opacity-100 px-2">
                List Chapter
              </div>
            </div>

            <div className="overflow-auto h-[500px] hide-scrollbar">
              <Skeleton className="mt-24" isLoaded={!!detailKomik}>
                <div className="grid grid-cols-1 gap-4">
                  {detailKomik?.listChapter.map((item: any, index: number) => (
                    <Link
                      key={index}
                      className="flex justify-between items-center px-4 py-2 bg-fixed rounded-2xl"
                      href={`/komik/${slug}/${item.url}`}
                    >
                      <div className="text-lg text-textwhiteblack font-semibold">
                        {item.title}
                      </div>
                      <div className="text-sm text-textwhiteblack font-semibold">
                        {item.releaseDate}
                      </div>
                    </Link>
                  )) || (
                    <div className="text-lg text-textwhiteblack font-semibold">
                      Loading chapters...
                    </div>
                  )}
                </div>
              </Skeleton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailKomikService;
