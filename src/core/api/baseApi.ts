import { post,get } from "@/src/core/api/api";
import {
  callToastDone,
  callToastError,
  callToastLoading,
  callToastSuccess,
} from "@/src/components/toast/callToast";

export const loginLoading = async (path: string, body: Record<string, any>) => {
  const date = new Date();

  callToastLoading(date.getTime().toString());
  const resp = await post(path, body);

  callToastDone(date.getTime().toString());

  if (resp === null) {
    callToastError("Invalid username or password");

    return null;
  }
  callToastSuccess("Logged in successfully!");

  return resp;
};

export const getData = async(path: string, body: Record<string,any>) => {
  const resp = await get(path, body);

  if (resp === null) {
    callToastError("An error occurred");

    return null;
  }

  // if(resp.status !== 200) {
  //   callToastError(resp.message);

  //   return null;
  // }

  return resp;
}

export const postData = async(path: string, body: Record<string, any>) => {

  const resp = await post(path, body);

  if (resp === null) {
    callToastError("An error occurred");

    return null;
  }

  if(resp.status !== 200) {
    callToastError(resp.message);

    return null;
  }

  return resp;
}
