import { getData, loginLoading } from "@/src/core/api/baseApi";
import { ConvertModelKomik } from "@/src/model/modelKomik";

export const getDataKomik = async (
    page: number,
  ): Promise<any | null> => {
    const resp = getData("/komik/new/" + page);
  
    console.log("response reposiotyr", resp);
    if (resp === null) {
      return null;
    }
  
    return ConvertModelKomik.toGetKomik(JSON.stringify(resp));
  };