"use client";
import React from 'react'
import useDetailMangaService from './detailKomikService'
import Image from 'next/image';
import Link from 'next/link';

const DetailKomikService = () => {
    const { slug, detailKomik} = useDetailMangaService();

    // const dataJson = {
    //   "tumbnail": "https://komikindo.tv/wp-content/uploads/2024/09/Komik-Shut-Up-Evil-Dragon-I-dont-want-to-raise-a-child-with-you-anymore-236x295.jpg",
    //   "rating": "",
    //   "dataDetail": {
    //     "sinopsis": "Manhua Shut Up, Evil Dragon, I Don’t Want to Raise a Child With You Anymore yang dibuat oleh komikus bernama\nMilkshake tail sauce ini bercerita tentang\nSetelah dikalahkan dan ditangkap, pembunuh naga Leon menjadi tawanan Ratu Naga Perak. Dengan kesadaran akan kematian, ia menggunakan sihir terlarang untuk mengutuk ratu, tetapi tanpa diduga, ratu kehilangan kendali. Ia berpikir bahwa ini akan membuat ratu hidup dengan rasa malu selama sisa hidupnya, dan itu akan sepadan dengan misi pembunuh naga. Namun dua tahun kemudian, ketika Leon membuka matanya, di sebelahnya ada seorang gadis naga kecil dengan ekor...",
    //     "status": "Berjalan",
    //     "pengarang": "Milkshake tail sauce",
    //     "ilustrator": "SF Light Novels (SF轻小说)",
    //     "jenisKomik": "Manhua",
    //     "jumlahPembaca": "130 orang",
    //     "judul": "闭嘴恶龙我不想再跟你带孩子了, Shut Up, Malevolent Dragon! I Don’t Want to Have Any More Children With You, Bi Zui E Long Wo Buxiang Zai Gen Ni Dai Haizile"
    //   },
    //   "listChapter": [
    //     {
    //       "title": "Chapter 2",
    //       "url": "/shut-up-evil-dragon-i-dont-want-to-raise-a-child-with-you-anymore-chapter-2/",
    //       "releaseDate": "22 menit yang lalu"
    //     },
    //     {
    //       "title": "Chapter 1",
    //       "url": "/shut-up-evil-dragon-i-dont-want-to-raise-a-child-with-you-anymore-chapter-1/",
    //       "releaseDate": "22 menit yang lalu"
    //     },
    //     {
    //       "title": "Chapter 00",
    //       "url": "/shut-up-evil-dragon-i-dont-want-to-raise-a-child-with-you-anymore-chapter-00/",
    //       "releaseDate": "22 menit yang lalu"
    //     }
    //   ],
    //   "status": "READING"
    // };

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='container px-4'>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-2/3 p-4 md:h-auto">
              <div className='grid grid-cols-1 md:grid-cols-3 px-2 py-2'>
                <div className='md:col-span-1 items-center mx-auto '>
                  <Image src={detailKomik?.tumbnail || ''} alt="Picture of the author" className='rounded-2xl border-2 border-fixed' width={236} height={295} />
                </div>
                <div className='md:col-span-2 '>
                  <div className='text-2xl font-bold text-justify'>
                    {detailKomik?.dataDetail.judul}
                  </div>
                  <div className='flex justify-start mt-8 gap-4'>
                      <div className='px-4 text-primary rounded-2xl font-semibold py-2 border-1 border-primary'>
                        {detailKomik?.dataDetail.jenisKomik}
                      </div>
                      <div className='px-4 text-secondary rounded-2xl font-semibold py-2 border-1 border-secondary'>
                        {detailKomik?.dataDetail.status}
                      </div>
                      <div className='px-4 text-primary rounded-2xl font-semibold py-2 border-1 border-primary'>
                        {detailKomik?.dataDetail.ilustrator}
                      </div>
                      <div className='px-4 text-secondary rounded-2xl font-semibold py-2 border-1 border-secondary'>
                        {detailKomik?.dataDetail.jumlahPembaca}
                      </div>
                  </div>
                  <hr className='mt-5' />
                  <div className='text-justify mt-8'>
                    {detailKomik?.dataDetail.sinopsis}
                  </div>
                </div>
              </div>
          </div>

          <div className="w-full relative md:w-1/3  md:h-auto mt-8">
            <div className='absolute text-2xl top-0 flex w-full bg-fixed rounded-t-xl h-20 py-5 justify-start'>
              {/*  */}
            </div>
            <div className='absolute text-2xl top-0 flex w-full py-5 justify-start'>
              <div className='text-textwhiteblack font-bold tracking-widest opacity-100 px-2'>
                List Chapter
              </div>
            </div>
            
            <div className='overflow-auto h-[500px] hide-scrollbar'>
              <div className='grid mt-24 grid-cols-1 gap-4'>
                  {detailKomik?.listChapter.map((item:any, index:number) => (
                    <Link key={index} href={`/komik/${slug}/${item.url}`} className='flex justify-between items-center px-4 py-2 bg-fixed rounded-2xl'>
                      <div className='text-lg text-textwhiteblack font-semibold'>
                        {item.title}
                      </div>
                      <div className='text-sm text-textwhiteblack font-semibold'>
                        {item.releaseDate}
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailKomikService
