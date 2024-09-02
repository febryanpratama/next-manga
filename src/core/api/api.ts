"use server";

import { cookies } from "next/headers";

import {
  ErrorData,
  ReturnResult,
} from "@/src/core/api/interface/InterfaceResponseResult";

function baseUrl(): string {
  return process.env.BASE_URL ?? "";
}

enum Method {
  POST = "POST",
  GET = "GET",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}
const cookieStore = cookies();

const header = async (): Promise<HeadersInit | undefined> => {
  const token = cookieStore.get("token");

  return {
    Authorization: `Bearer ${token?.value}`,
    "Content-Type": "application/json",
  };
};

const fetchData = async (
  path: string,
  body: Record<string, any>,
  method: Method,
): Promise<any> => {
  const base = `${baseUrl()}${path}`;

  const headers = await header();

  console.debug("fetching data from", base);
  console.debug("headers", headers);
  console.debug("method", method);
  console.debug("body", body);
  console.debug("====================================");

  return fetch(base, {
    method: method,
    headers: headers,
    body: JSON.stringify(body),
  })
    .then(async (res) => {
      console.debug("response status", res.status);
      const [respJson] = await Promise.all([res.json()]);

      if (res.status == 200 || res.status == 201) {
        console.debug("response body", respJson);

        if (respJson.token !== null) {
          cookieStore.set("token", respJson.token, {
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
          });
        }

        return {
          message: respJson.message ?? "Success",
          statusCode: res.status,
          data: respJson,
        };
      } else if (res.status == 400) {
        throw new ErrorData(respJson.message, res.status);
      } else {
        throw new ErrorData("Network response was not ok", 500);
      }
    })
    .catch((error: ErrorData) => {
      console.debug("error", error.message);

      return {
        message: error.message,
        statusCode: error.status,
        data: null,
      };
    });
};

export const postFetchData = async (
  path: string,
  body: Record<string, any>,
): Promise<ReturnResult> => {
  const resp = await fetchData(path, body, Method.POST);

  return {
    data: resp.data,
    message: resp.message,
    statusCode: resp.statusCode,
  };
};

export const getFetchData = async (
  path: string,
  body: Record<string, any>,
): Promise<ReturnResult> => {
  const resp = await fetchData(path, body, Method.GET);

  return {
    data: resp.data,
    message: resp.message,
    statusCode: resp.statusCode,
  };
};

export const putFetchData = async (
  path: string,
  body: Record<string, any>,
): Promise<ReturnResult> => {
  const resp = await fetchData(path, body, Method.PUT);

  return {
    data: resp.data,
    message: resp.message,
    statusCode: resp.statusCode,
  };
};

export const patchFetchData = async (
  path: string,
  body: Record<string, any>,
): Promise<ReturnResult> => {
  const resp = await fetchData(path, body, Method.PATCH);

  return {
    data: resp.data,
    message: resp.message,
    statusCode: resp.statusCode,
  };
};

export const deleteFetchData = async (
  path: string,
  body: Record<string, any>,
): Promise<ReturnResult> => {
  const resp = await fetchData(path, body, Method.DELETE);

  return {
    data: resp.data,
    message: resp.message,
    statusCode: resp.statusCode,
  };
};
