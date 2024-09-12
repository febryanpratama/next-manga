"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Skeleton } from "@nextui-org/skeleton";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/breadcrumbs";
import { useRouter } from "next/navigation";

import useDetailChapterKomikService from "./detailChapterKomikService";

interface ImageType {
  no: number;
  image: string;
}

// Define the type for the detailChapterJson
interface ChapterDetailType {
  nextChapter: string;
  prevChapter: string;
  chapterName: string;
  listImage: ImageType[];
}

const DetailChapterKomikView = () => {
  const router = useRouter();
  const { slugKomik, slugChapter, detailChapter } =
    useDetailChapterKomikService();

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="fluid-container md:w-2/4 px-4 mt-10 h-auto">
        <div className={`hidden md:visible`}>
          <Breadcrumbs>
            <BreadcrumbItem
              onPress={() => {
                router.push("/");
              }}
            >
              Home
            </BreadcrumbItem>
            <BreadcrumbItem
              onPress={() => {
                router.push("/komik/" + slugKomik);
              }}
            >
              {slugKomik}
            </BreadcrumbItem>
            <BreadcrumbItem>{slugChapter}</BreadcrumbItem>
          </Breadcrumbs>
        </div>
        <div className="flex mt-10 justify-between">
          <Skeleton isLoaded={!!detailChapter}>
            <Link
              href={`/komik/${slugKomik}/${detailChapter?.prevChapter || "#"}`}
              style={{
                pointerEvents: detailChapter?.prevChapter ? "auto" : "none",
              }}
            >
              <div
                className={`text-sm md:text-xl border-1 border-primary px-4 py-2 rounded-2xl`}
              >
                Chapter Sebelumnya
              </div>
            </Link>
          </Skeleton>

          <Skeleton isLoaded={!!detailChapter}>
            <Link
              href={`/komik/${slugChapter}/${detailChapter?.nextChapter || "#"}`}
              style={{
                pointerEvents: detailChapter?.nextChapter ? "auto" : "none",
              }}
            >
              <div
                className={`text-sm md:text-xl border-1 border-primary px-4 py-2 rounded-2xl`}
              >
                Chapter Selanjutnya
              </div>
            </Link>
          </Skeleton>
        </div>

        <div className="flex flex-col mt-10">
          {detailChapter
            ? detailChapter.listImage.map((item: ImageType, index: number) => (
                <div key={index} className="relative w-full h-auto">
                  <Image
                    alt={`Picture ${index}`}
                    className="rounded-2xl border-2 border-fixed"
                    height={700}
                    layout="responsive"
                    loading={"lazy"}
                    src={item.image}
                    width={500}
                  />
                </div>
              ))
            : // Show skeleton for the images if detailChapter is not loaded
              [...Array(3)].map((_, index) => (
                <Skeleton key={index} className="rounded-2xl border-2 my-4">
                  <div className="relative w-full h-[700px] bg-gray-200" />
                </Skeleton>
              ))}
        </div>
        <div className="flex mt-10 justify-between">
          <Skeleton isLoaded={!!detailChapter}>
            <Link
              href={`/komik/${slugKomik}/${detailChapter?.prevChapter || "#"}`}
              style={{
                pointerEvents: detailChapter?.prevChapter ? "auto" : "none",
              }}
            >
              <div
                className={`text-sm md:text-xl border-1 border-primary px-4 py-2 rounded-2xl`}
              >
                Chapter Sebelumnya
              </div>
            </Link>
          </Skeleton>

          <Skeleton isLoaded={!!detailChapter}>
            <Link
              href={`/komik/${slugChapter}/${detailChapter?.nextChapter || "#"}`}
              style={{
                pointerEvents: detailChapter?.nextChapter ? "auto" : "none",
              }}
            >
              <div
                className={`text-sm md:text-xl border-1 border-primary px-4 py-2 rounded-2xl`}
              >
                Chapter Selanjutnya
              </div>
            </Link>
          </Skeleton>
        </div>
      </div>
    </div>
  );
};

export default DetailChapterKomikView;
