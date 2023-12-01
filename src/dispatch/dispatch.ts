import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import ApiPaths from "../paths/apiPaths";
import { urls } from "../paths/baseUrlPaths";
import { getAxiosOptions } from "./getAxiosOptions";
import actions from "./actions";

interface IHeaderParams {
  routeType?: string;
}

interface IDispatchOptions {
  action: string;
  headerParams?: IHeaderParams;
  body?: Record<string, any>;
  token?: string;
}

interface IError {
  message: String;
}


const dispatch = async ({
  action,
  headerParams = {},
  body = {},
  token = "",
}: IDispatchOptions): Promise<any> => {
  let axiosOptions: AxiosRequestConfig = {};
  let response: AxiosResponse | IError = { message: "Not found" };
  try {
    switch (action) {
      case actions.getTask:
        axiosOptions = getAxiosOptions(
          "GET",
          `${urls.baseUrlRestApi}${ApiPaths.GetTasksWithUserId}`,
          {},
          token
        );
        response = await axios(axiosOptions);
        return response;

      case actions.addTask:
        axiosOptions = getAxiosOptions(
          "POST",
          `${urls.baseUrlRestApi}${ApiPaths.AddTask}`,
          body,
          token
        );
        response = await axios(axiosOptions);
        return response;

      case actions.deleteTask:
        axiosOptions = getAxiosOptions(
          "DELETE",
          `${urls.baseUrlRestApi}${ApiPaths.DeleteTask}${body.id}`,
          body,
          token
        );
        response = await axios(axiosOptions);
        return response;

      case actions.editTask:
        axiosOptions = getAxiosOptions(
          "PUT",
          `${urls.baseUrlRestApi}${ApiPaths.EditTask}${body.id}`,
          body,
          token
        );
        response = await axios(axiosOptions);
        return response;

      default:
        response = { message: "Invalid Command" };
        return response;
    }
  } catch (err) {
    console.log(err);
    return (response = { message: "Invalid Command" });
  }
};

export default dispatch;
