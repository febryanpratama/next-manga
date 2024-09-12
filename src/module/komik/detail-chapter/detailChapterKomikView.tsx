"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

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
  const { slugKomik, slugChapter, detailChapter } =
    useDetailChapterKomikService();

  if (!detailChapter) {
    // Display a loading indicator or a placeholder if detailChapter is null
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-2/4 px-4 mt-10 h-auto">
        <div className="flex justify-between">
          <Link
            href={`/komik/${slugKomik}/${detailChapter?.prevChapter || "#"}`} // Fallback href to prevent errors
            style={{
              pointerEvents: detailChapter?.prevChapter ? "auto" : "none",
            }}
          >
            <div className={`border-1 border-primary px-4 py-2 rounded-2xl`}>
              Chapter Sebelumnya
            </div>
          </Link>
          <Link
            href={`/komik/${slugChapter}/${detailChapter?.nextChapter || "#"}`} // Fallback href to prevent errors
            style={{
              pointerEvents: detailChapter?.nextChapter ? "auto" : "none",
            }}
          >
            <div className="border-1 border-primary px-4 py-2 rounded-2xl">
              Chapter Selanjutnya
            </div>
          </Link>
        </div>
        <div className="flex flex-col mt-10">
          {detailChapter.listImage.map((item: ImageType, index: number) => (
            <div key={index} className="relative w-full h-auto">
              <Image
                alt={`Picture ${index}`}
                className="rounded-2xl border-2 border-fixed"
                height={700}
                layout="responsive"
                src={item.image}
                width={500}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailChapterKomikView;
