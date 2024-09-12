export interface ModelCheck {
  errorCode: number;
  message: string;
  result: Result;
}

export interface Result {
  status: boolean;
}

// Converts JSON strings to/from your types
export class ConvertCheckModel {
  public static toGetCheckResponse(json: string): ModelCheck {
    return JSON.parse(json);
  }

  public static getCheckResponseToJson(value: ModelCheck): string {
    return JSON.stringify(value);
  }
}
