"use client";
import Image from "next/image";
import React from "react";
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
  const { slugKomik, slugChapter, detailChapter } = useDetailChapterKomikService();

  if (!detailChapter) {
    // Display a loading indicator or a placeholder if detailChapter is null
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-2/4 px-4 mt-10 h-auto">
        <div className="flex justify-between">
          <div className="border-1 border-primary px-4 py-2 rounded-2xl">
            Chapter Sebelumnya
          </div>
          <div className="border-1 border-primary px-4 py-2 rounded-2xl">
            Chapter Selanjutnya
          </div>
        </div>
        <div className="flex flex-col mt-10">
          {detailChapter.listImage.map((item: ImageType, index: number) => (
            <div key={index} className="relative w-full h-auto">
              <Image
                src={item.image}
                alt={`Picture ${index}`}
                className="rounded-2xl border-2 border-fixed"
                layout="responsive"
                width={500}
                height={700}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailChapterKomikView;
