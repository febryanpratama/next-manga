import { get } from "@/src/core/api/baseApi";
import { ConvertModelKomik } from "@/src/model/modelKomik";

export const getDataKomik = async (
    page: number,
  ): Promise<any | null> => {
    const resp = await get("/komik/open-api/" + page);
  
    // console.log("response repository", resp);
    if (resp === null) {
      return null;
    }
  
    return ConvertModelKomik.toGetKomik(JSON.stringify(resp));
};