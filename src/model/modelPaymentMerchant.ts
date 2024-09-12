export interface GetMerchanList {
  errorCode: number;
  message: string;
  result: Result[];
}

export interface Result {
  group: string;
  code: string;
  name: string;
  type: string;
  fee_merchant: Fee;
  fee_customer: Fee;
  total_fee: TotalFee;
  minimum_fee: null;
  maximum_fee: null;
  minimum_amount: number;
  maximum_amount: number;
  icon_url: string;
  active: boolean;
}

export interface Fee {
  flat: number;
  percent: number;
}

export interface TotalFee {
  flat: number;
  percent: string;
}

// Converts JSON strings to/from your types
export class ConvertModelPaymentMerchant {
  public static toGetMerchanList(json: string): GetMerchanList {
    return JSON.parse(json);
  }

  public static getMerchanListToJson(value: GetMerchanList): string {
    return JSON.stringify(value);
  }
}
