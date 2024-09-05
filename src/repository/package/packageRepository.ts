import { get } from "@/src/core/api/baseApi"
import { ConvertModelPackage } from "@/src/model/modelPackage";

export const getDataPackage = async (): Promise<any | null> => {

    const resp = await get('/packages');
    
    // console.log("response repository", resp);
    if(resp === null){
        return null;
    }

    // return resp.data;
    return ConvertModelPackage.toGetPackage(JSON.stringify(resp));
}