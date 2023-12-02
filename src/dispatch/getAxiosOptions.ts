import { AxiosRequestConfig } from "axios";

export const getAxiosOptions = (
    method: AxiosRequestConfig["method"],
    url: string,
    data: AxiosRequestConfig["data"],
    token: string
  ): AxiosRequestConfig => {
    return {
      method,
      url,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
  };