"use client";
import Image from 'next/image';
import React from 'react';
import useDetailChapterKomikService from './detailChapterKomikService';

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
  const {
    slugKomik,
    slugChapter,
  } = useDetailChapterKomikService();
    const detailChapterJson : ChapterDetailType  = {
        "nextChapter": "/shut-up-evil-dragon-i-dont-want-to-raise-a-child-with-you-anymore-chapter-1/",
        "prevChapter": "",
        "chapterName": "Chapter 00",
        "listImage": [
          {
            "no": 0,
            "image": "https://5ln1h5525y2q.kentut.xyz/data/59606968/00/321286f8e5561312686f29d4263be214/IfIhjQFx16kNjvBHO7YJ5vfErdeQ5baj0sMhMxq9.jpg"
          },
          {
            "no": 1,
            "image": "https://5ln1h5525y2q.kentut.xyz/data/59606968/00/321286f8e5561312686f29d4263be214/tsbwUqe3F2YdWUIb0tC4BWxSnALRFVMWv9yJ6ubg.jpg"
          },
          {
            "no": 2,
            "image": "https://5ln1h5525y2q.kentut.xyz/data/59606968/00/321286f8e5561312686f29d4263be214/JVzpCYWBQflB37wT5y1bpWhyM48PjeXjJNkUOGyz.jpg"
          },
          {
            "no": 3,
            "image": "https://5ln1h5525y2q.kentut.xyz/data/59606968/00/321286f8e5561312686f29d4263be214/HfWpP6v08uHYT2cKFBMKadyZIHFyemXlnR9wNgtv.jpg"
          },
          {
            "no": 4,
            "image": "https://5ln1h5525y2q.kentut.xyz/data/59606968/00/321286f8e5561312686f29d4263be214/nMLWZuD2zWcUpPRLcQim5VE1rn8A5Lx4hQCQ7CxK.jpg"
          },
          {
            "no": 5,
            "image": "https://5ln1h5525y2q.kentut.xyz/data/59606968/00/321286f8e5561312686f29d4263be214/N3cPK93T2Hh6Mz3epw4q69tBxQ73NYs615oO3MTz.jpg"
          },
          {
            "no": 6,
            "image": "https://5ln1h5525y2q.kentut.xyz/data/59606968/00/321286f8e5561312686f29d4263be214/xglgU1rpbK58isdI8JiG6l0ba0VgzCdm6HYubNpT.jpg"
          },
          {
            "no": 7,
            "image": "https://5ln1h5525y2q.kentut.xyz/data/59606968/00/321286f8e5561312686f29d4263be214/HPao1KX8lXt7StZlcLorNEtNd10jdLB8YsgoEss3.jpg"
          },
          {
            "no": 8,
            "image": "https://5ln1h5525y2q.kentut.xyz/data/59606968/00/321286f8e5561312686f29d4263be214/OViF17rwYLppgFDCXMKOCdt4VeZx0Nl6wZvRki36.jpg"
          },
          {
            "no": 9,
            "image": "https://5ln1h5525y2q.kentut.xyz/data/59606968/00/321286f8e5561312686f29d4263be214/aOIMcqHr2gMlm7gbt04i268aiN2eCLy2csJqE0c8.jpg"
          },
          {
            "no": 10,
            "image": "https://5ln1h5525y2q.kentut.xyz/data/59606968/00/321286f8e5561312686f29d4263be214/BSGD1yErKtt4QlBVlhv0dG3gKrM81ucV1xPD4O4m.jpg"
          },
          {
            "no": 11,
            "image": "https://5ln1h5525y2q.kentut.xyz/data/59606968/00/321286f8e5561312686f29d4263be214/IDOb0ShDXbKsJyz5t7j82rxHIFE0ayii4HzujVRw.jpg"
          },
          {
            "no": 12,
            "image": "https://5ln1h5525y2q.kentut.xyz/data/59606968/00/321286f8e5561312686f29d4263be214/rfT39DCtOIBlu4Lw5CzDqihv9Lm79JPlQKRdNI8R.jpg"
          },
          {
            "no": 13,
            "image": "https://5ln1h5525y2q.kentut.xyz/data/59606968/00/321286f8e5561312686f29d4263be214/A6M97Iw5JrmzlMrqVnU5ftf8udpywUlZuqnbJLw8.jpg"
          }
        ]
      };
    
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='w-2/4 px-4 mt-10 h-auto'>
                <div className='flex justify-between'>
                    <div className='border-1 border-primary px-4 py-2 rounded-2xl'> 
                        Chapter Sebelumnya
                    </div>
                    <div className='border-1 border-primary px-4 py-2 rounded-2xl'> 
                        Chapter Selanjutnya
                    </div>
                </div>
                <div className='flex flex-col mt-10'>
                    {detailChapterJson.listImage.map((item, index) => (
                        <div key={index} className='relative w-full h-auto'>
                            <Image
                                src={item.image}
                                alt={`Picture ${index}`}
                                className='rounded-2xl border-2 border-fixed'
                                layout='responsive'
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
