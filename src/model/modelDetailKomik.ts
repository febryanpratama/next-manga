// To parse this data:
//
//   import { Convert, ModelDetailKomik } from "./file";
//
//   const modelDetailKomik = Convert.toModelDetailKomik(json);

export interface ModelDetailKomik {
    errorCode: number;
    message:   string;
    result:    ResultDetailKomik;
}

export interface ResultDetailKomik {
    tumbnail:    string;
    rating:      string;
    status:      string;
    dataDetail:  DataDetail;
    listChapter: ListChapter[];
}

export interface DataDetail {
    judul:         string;
    sinopsis:      string;
    status:        string;
    pengarang:     string;
    ilustrator:    string;
    tema:          string;
    jenisKomik:    string;
    jumlahPembaca: string;
}

export interface ListChapter {
    title:       string;
    url:         string;
    releaseDate: string;
}

// Converts JSON strings to/from your types
export class ConvertToModelDetailKomik {
    public static toModelDetailKomik(json: string): ModelDetailKomik {
        return JSON.parse(json);
    }

    public static modelDetailKomikToJson(value: ModelDetailKomik): string {
        return JSON.stringify(value);
    }
}
