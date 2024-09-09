import { get } from "@/src/core/api/baseApi";
import {
  ConvertToModelDetailKomik,
  ModelDetailKomik,
} from "@/src/model/modelDetailKomik";

export const getDetailManga = async (
  slug: string,
): Promise<ModelDetailKomik | null> => {
  const resp = await get("/komik/detail/" + slug);

  if (resp === null) {
    return null;
  }

  return ConvertToModelDetailKomik.toModelDetailKomik(
    JSON.stringify(resp.data),
  );
};

export const getDetailChapterManga = async (
  slug: string,
): Promise<any | null> => {
  // const resp = await get('/')
};
