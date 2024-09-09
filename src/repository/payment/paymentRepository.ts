import { get } from "@/src/core/api/baseApi";
import { ConvertModelPaymentMerchant } from "@/src/model/modelPaymentMerchant";

export const getDataPaymentChannel = async (): Promise<any | null> => {
  const resp = await get("/tripay");

  if (resp === null) {
    return null;
  }

  return ConvertModelPaymentMerchant.toGetMerchanList(JSON.stringify(resp));
};
