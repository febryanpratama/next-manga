"use client";
import { Image, Link } from "@nextui-org/react";
import React from "react";

import HomeService from "./homeService";

// import Link from 'next/link'

const HomeView = () => {
  const { komik, setKomik, embla } = HomeService();

  const slides = [
    {
      img: "/images/manga/hashira.png",
    },
    {
      img: "/images/manga/hashira.png",
    },
    {
      img: "/images/manga/hashira.png",
    },
  ];

  return (
    <div className="flex flex-col md:py-20 justify-center items-center">
      {/* Higlight */}
      {/*<div ref={embla} className={`container bg-red-600 embla`}>*/}
      {/*  <div className={`embla__container`}>*/}
      {/*    <div className={`embla__slide`}>*/}
      {/*      <Image*/}
      {/*        className={`object-fill w-full embla__slide__number`}*/}
      {/*        src={`/images/manga/hashira.png`}*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*    <div className={`embla__slide`}>*/}
      {/*      <Image*/}
      {/*        className={`object-fill w-full embla__slide__number`}*/}
      {/*        src={`/images/manga/hashira.png`}*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*    <div className={`embla__slide`}>*/}
      {/*      <Image*/}
      {/*        className={`object-fill w-full embla__slide__number`}*/}
      {/*        src={`/images/manga/hashira.png`}*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <section className="embla px-5">
        <div ref={embla} className="embla__viewport">
          <div className="embla__container">
            {slides.map((item: any, index: number) => (
              <div key={index} className="embla__slide">
                <Image
                  className="w-full object-cover embla__slide__number"
                  src={`/images/manga/hashira.png`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*<EmblaCarouselComponent />*/}

      <div className="container px-5">
        <div className="text-3xl font-bold text-start my-4 ">Highlights</div>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
          <div className="lg:col-span-3 flex justify-center items-center">
            <div className="relative">
              <Image
                alt=""
                className="object-fill w-full"
                loading="eager"
                radius="lg"
                src="/images/manga/hashira.png"
              />
              <div className="absolute z-20 bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/100 to-transparent rounded-b-lg" />

              <div className="absolute bottom-10 inset-x-0 flex items-center justify-center">
                <p className="text-white font-bold text-2xl z-40 p-2 -*">
                  Kimetsu No Yaiba
                </p>
              </div>
            </div>
          </div>
          <div className="lg:grid lg:grid-flow-row lg:col-span-2 gap-4">
            <div className="relative">
              <Image
                alt=""
                className="object-cover"
                height={500}
                loading="eager"
                radius="lg"
                src="/images/manga/kimetsu.jpg"
                width={500}
              />
              <div className="absolute z-20 bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/100 to-transparent rounded-b-lg" />

              <div className="absolute bottom-8 inset-x-0 flex items-center justify-center">
                <p className="text-white font-bold text-2xl z-40 p-2 -*">
                  Kimetsu No Yaiba
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                alt=""
                className="object-cover"
                height={300}
                loading="eager"
                radius="lg"
                src="/images/manga/kny.jpeg"
                width={500}
              />
              <div className="absolute z-20 bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/100 to-transparent rounded-b-lg" />

              <div className="absolute bottom-8 inset-x-0 flex items-center justify-center">
                <p className="text-white font-bold text-2xl z-40 p-2 -*">
                  Kimetsu No Yaiba
                </p>
              </div>
            </div>
          </div>
          {/* <div className="lg:grid lg:grid-flow-row lg:col-span-1 gap-4">
                    <Image src='/images/manga/kimetsu.jpg' alt='' loading='eager' className="object-cover" width={500} radius="lg" height={200} />
                    <Image src='/images/manga/kny.jpeg' alt='' loading='eager' className="object-cover" width={500} radius="lg" height={300} />
                    <Image src='/images/manga/kimetsu.jpg' alt='' loading='eager' className="object-cover" width={500} radius="lg" height={200} />
                </div> */}
          <div className="lg:grid lg:grid-flow-row lg:col-span-1 gap-4">
            {/* Image with text overlay */}
            <div className="relative">
              <Image
                alt=""
                className="object-cover"
                height={200}
                loading="eager"
                src="/images/manga/kimetsu.jpg"
                width={500}
              />
              <div className="absolute z-20 bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/100 to-transparent rounded-b-lg" />

              <div className="absolute bottom-8 inset-x-0 flex items-center justify-center">
                <p className="text-white font-bold text-lg z-40 p-2 -*">
                  Kimetsu No Yaiba
                </p>
              </div>
            </div>

            {/* Second Image with text overlay */}
            <div className="relative">
              <Image
                alt=""
                className="object-cover"
                height={300}
                loading="eager"
                src="/images/manga/kny.jpeg"
                width={500}
              />
              <div className="absolute z-20 bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/100 to-transparent rounded-b-lg" />
              <div className="absolute bottom-8 inset-x-0 flex items-center justify-center">
                <p className="text-white font-bold text-lg z-40 p-2 -*">
                  Kimetsu No Yaiba
                </p>
              </div>
            </div>

            {/* Third Image with text overlay */}
            <div className="relative">
              <Image
                alt=""
                className="object-cover"
                height={200}
                loading="eager"
                src="/images/manga/kimetsu.jpg"
                width={500}
              />
              <div className="absolute z-20 bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/100 to-transparent rounded-b-lg" />
              <div className="absolute bottom-8 inset-x-0 flex items-center justify-center">
                <p className="text-white font-bold text-lg z-40 p-2 -*">
                  Kimetsu No Yaiba
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Manga */}
      <div className="container px-5">
        <div className="text-3xl font-bold text-center mt-10 mb-5 ">
          Komik Terbaru
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {komik.map((item: any, index: number) => (
            <div key={index} className="relative flex justify-center">
              <Link href={`/komik/${item.id}`}>
                <Image
                  alt=""
                  className="object-fill w-full"
                  height={500}
                  loading="lazy"
                  radius="lg"
                  src={`https://komikindo.ws${item.urlGambar}`}
                />
                <div className="absolute z-20 bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/100 to-transparent rounded-b-lg" />
                <div className="absolute bottom-10 z-40 inset-x-0 flex flex-col items-center justify-center">
                  <div className="text-center text-white font-bold">
                    {item.judul}
                  </div>
                  <div className="text-center text-white">
                    {item.terakhirDiperbarui}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeView;
