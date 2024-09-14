// To parse this data:
//
//   import { Convert, ModelFavorite } from "./file";
//
//   const modelFavorite = Convert.toModelFavorite(json);

export interface ModelFavorite {
  errorCode: number;
  message: string;
  result: Result;
}

export interface Result {
  listData: ListDatum[];
}

export interface ListDatum {
  id: string;
  judul: string;
  urlGambar: string;
  terakhirDiperbarui: string;
  idDb: number;
}

// Converts JSON strings to/from your types
export class ConvertToModelFavorite {
  public static toModelFavorite(json: string): ModelFavorite {
    return JSON.parse(json);
  }

  public static modelFavoriteToJson(value: ModelFavorite): string {
    return JSON.stringify(value);
  }
}
