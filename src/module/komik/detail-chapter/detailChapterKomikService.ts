"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const useDetailChapterKomikService = () => {

    const pathname = usePathname();
    const slug = pathname.split('/').pop(); // Extracts the last part of the path as the slug

    // console.log(slug);
    const fetchData = async () => {
        // const 
    }

    useEffect(()=>{
        // console.log("slug",slug);
        fetchData();
    },[]);

    return {
        // 
        slug,
    }
}

export default useDetailChapterKomikService;