export interface IHeaderParams {
  routeType?: string;
}

export interface IDispatchOptions {
  action: string;
  headerParams?: IHeaderParams;
  body?: Record<string, any>;
  token?: string;
}

export interface IError {
  message: String;
}
