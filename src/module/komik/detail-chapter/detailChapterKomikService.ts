"use client";
import { getDetailChapterManga } from "@/src/repository/manga/mangaRepository";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const useDetailChapterKomikService = () => {
    const [detailChapter, setDetailChapter] = useState<any | null>(null);

    const pathname = usePathname(); // Get the full path of the URL

    const pathParts = pathname.split('/'); // Split the path into segments
    const slugKomik = pathParts[2]; // Get the third segment for 'slug-komik'
    const slugChapter = pathParts[3]; 

    const fetchData = async () => {
        const resp = await getDetailChapterManga(slugKomik, slugChapter);
        // Fetch data logic here

        if(resp === null){
            // Handle error
            return;
        }

        console.log("Detail Chapter", resp);

        setDetailChapter(resp);
    };


    useEffect(() => {
        fetchData(); // Fetch data whenever the component mounts
    }, []); // Trigger fetching when slugs are set

    return {
        slugKomik,
        slugChapter,
        detailChapter
    };
};
export default useDetailChapterKomikService;
