import { get } from "@/src/core/api/baseApi"
import { ConvertToModelDetailChapterKomik } from "@/src/model/modelDetailChapterKomik";
import { ConvertToModelDetailKomik, ModelDetailKomik, ResultDetailKomik } from "@/src/model/modelDetailKomik";

export const getDetailManga = async (slug: string): Promise<ModelDetailKomik | null> => {
    const resp = await get('/komik/detail/' + slug);

    if(resp === null){
        return null;
    }

    return ConvertToModelDetailKomik.toModelDetailKomik(JSON.stringify(resp.data));
    
}

export const getDetailChapterManga = async(slugkomik: string, slugchapter: string): Promise<any | null> =>{
    // const resp = await get('/')
    const resp = await get('/komik/chapter/' + slugkomik + '/' + slugchapter);

    if(resp === null){
        return null;
    }

    return ConvertToModelDetailChapterKomik.toModelDetailChapterKomik(JSON.stringify(resp.data));
}