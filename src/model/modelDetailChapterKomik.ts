// To parse this data:
//
//   import { Convert, ModelDetailChapterKomik } from "./file";
//
//   const modelDetailChapterKomik = Convert.toModelDetailChapterKomik(json);

export interface ModelDetailChapterKomik {
    errorCode: number;
    message:   string;
    result:    Result;
}

export interface Result {
    nextChapter: string;
    prevChapter: string;
    chapterName: string;
    listImage:   ListImage[];
}

export interface ListImage {
    no:    number;
    image: string;
}

// Converts JSON strings to/from your types
export class ConvertToModelDetailChapterKomik {
    public static toModelDetailChapterKomik(json: string): ModelDetailChapterKomik {
        return JSON.parse(json);
    }

    public static modelDetailChapterKomikToJson(value: ModelDetailChapterKomik): string {
        return JSON.stringify(value);
    }
}
