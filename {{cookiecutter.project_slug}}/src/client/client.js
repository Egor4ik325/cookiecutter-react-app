import axios from "axios";
import { Authentication } from "./resources";

class ApiClient {
  constructor() {
    const instance = axios.create();
    instance.interceptors.request.use(_requestInterceptor, null);
    instance.interceptors.response.use(null, _responseRejectedInterceptor);

    this.authentication = new Authentication(instance);
  }
}

function _requestInterceptor(config) {
  return config;
}

async function _responseRejectedInterceptor(error) {
  return Promise.reject(error);
}

const client = new ApiClient();
export default client;
