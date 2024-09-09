"use server";

import { cookies } from "next/headers";

import {
  ErrorData,
  ReturnResult,
} from "@/src/core/api/interface/InterfaceResponseResult";

// Base URL for API requests
function baseUrl(): string {
  return process.env.BASE_URL ?? "";
}

enum Method {
  POST = "POST",
  GET = "GET",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
  HEAD = "HEAD",
}
const cookieStore = cookies(); // Re-initialize here to ensure fresh access

// Function to construct headers with authorization
const header = async (): Promise<HeadersInit | undefined> => {
  const token = cookieStore.get("token"); // Get token from cookies

  return {
    Authorization: `Bearer ${token?.value ?? ""}`, // Handle missing token
    "Content-Type": "application/json",
  };
};

// Fetch data from an API endpoint
const fetchData = async (
  path: string,
  body: Record<string, any>,
  method: Method,
): Promise<any> => {
  const base = `${baseUrl()}${path}`;
  const headers = await header();

  console.log("Fetch Data Header", headers);

  console.debug("fetching data from", base);
  console.debug("headers", headers);
  console.debug("method", method);
  console.debug("body", body);
  console.debug("====================================");

  const fetchOptions: RequestInit = {
    method: method,
    headers: headers,
  };

  // Include body only if the method is not GET or HEAD
  if (method !== Method.GET && method !== Method.HEAD) {
    fetchOptions.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(base, fetchOptions);
    const respJson = await response.json();

    console.debug("response status", response.status);

    if (response.ok) {
      console.debug("response body status 200", respJson);

      return {
        message: respJson.message ?? "Success",
        statusCode: response.status,
        data: respJson,
      };
    } else {
      throw new ErrorData(respJson.message || "Error", response.status);
    }
  } catch (error: any) {
    console.debug("error", error.message);

    return {
      message: error.message,
      statusCode: error.status ?? 500,
      data: null,
    };
  }
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

  console.log("Base Api Resp",resp);
  return {
    data: resp.data.result,
    message: resp.message,
    statusCode: resp.statusCode,
    // data: "data",
    // message: "message",
    // statusCode: 201,
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


export const postFetchLogin = async (
  path: string,
  body: Record<string, any>,
): Promise<ReturnResult> => {
  const resp = await fetchData(path, body, Method.POST);

  if(resp.data !== null){
    // console.log("response", resp.data);
    if(resp.data.result !== null){
      const token = resp.data.result.token;
      cookieStore.set("token", token, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      });
    }
  }

  return {
    data: resp.data,
    message: resp.message,
    statusCode: resp.statusCode,
  };
}