export interface GetPackage {
  errorCode: number;
  message: string;
  result: Result[];
}

export interface Result {
  id: number;
  name: string;
  price: number;
  duration: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
  DetailPackage: DetailPackage[];
}

export interface DetailPackage {
  id: number;
  packageId: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
}

// Converts JSON strings to/from your types
export class ConvertModelPackage {
  public static toGetPackage(json: string): GetPackage {
    return JSON.parse(json);
  }

  public static getPackageToJson(value: GetPackage): string {
    return JSON.stringify(value);
  }
}
