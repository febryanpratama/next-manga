// To parse this data:
//
//   import { Convert, GetKomik } from "./file";
//
//   const getKomik = Convert.toGetKomik(json);

export interface GetKomik {
    errorCode: number;
    message:   string;
    result:    Result;
}

export interface Result {
    listData: ListDatum[];
}

export interface ListDatum {
    judul:              string;
    urlGambar:          string;
    terakhirDiperbarui: string;
    id:                 string;
}

// Converts JSON strings to/from your types
export class ConvertModelKomik {
    public static toGetKomik(json: string): GetKomik {
        return JSON.parse(json);
    }

    public static getKomikToJson(value: GetKomik): string {
        return JSON.stringify(value);
    }
}
