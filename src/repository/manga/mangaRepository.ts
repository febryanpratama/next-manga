import { get, post } from "@/src/core/api/baseApi";
import {
  ConvertToModelDetailChapterKomik,
  ModelDetailChapterKomik,
} from "@/src/model/modelDetailChapterKomik";
import {
  ConvertToModelDetailKomik,
  ModelDetailKomik,
} from "@/src/model/modelDetailKomik";
import {
  ConvertToModelFavorite,
  ModelFavorite,
} from "@/src/model/modelFavorite";

export const getDetailManga = async (
  slug: string,
): Promise<ModelDetailKomik | null> => {
  const resp = await get("/komik/detail/" + slug);

  if (resp === null) {
    return null;
  }

  return ConvertToModelDetailKomik.toModelDetailKomik(JSON.stringify(resp));
};

export const getDetailChapterManga = async (
  slugkomik: string,
  slugchapter: string,
): Promise<ModelDetailChapterKomik | null> => {
  // const resp = await get('/')
  const resp = await post("/komik/chapter/" + slugkomik + "/" + slugchapter, {
    title: "string",
  });

  if (resp === null) {
    return null;
  }

  return ConvertToModelDetailChapterKomik.toModelDetailChapterKomik(
    JSON.stringify(resp),
  );
};

export const getKomikFavorite = async (): Promise<ModelFavorite | null> => {
  const resp = await get("/favorite");

  if (resp === null) {
    return null;
  }

  return ConvertToModelFavorite.toModelFavorite(JSON.stringify(resp));
};
