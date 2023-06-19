import axios, {Method} from 'axios';
import {store} from '../../redux/store';

const API_URL = 'http://localhost:8080';

const resolveURL = (path: string) => {
  return `${API_URL}${path}`;
};

interface RequestOptions {
  path: string;
  body?: any;
  headers?: any;
  method?: Method;
  auth?: boolean;
}

interface ResponseOptions {
  success: boolean;
  code?: string;
  message?: string;
  response?: any;
}

const request = async (options: RequestOptions): Promise<ResponseOptions> => {
  try {
    let {path, body, headers, method, auth = true} = options;

    if (auth) {
      const token = store.getState().user.tokens.accessToken;
      headers = {
        ...headers,
        Authorization: `Bearer ${token}`,
      };
    }

    const response = await axios({
      url: resolveURL(path),
      method,
      data: body,
      headers,
    });
    const {status} = response.data;

    if (status === 'success') {
      return {success: true, response: response.data};
    } else {
      return {success: false};
    }
  } catch (err: any) {
    console.error('ERROR network request:: ', err.message);
    throw {success: false, message: err.response.data.message};
  }
};

const network = {
  request: {
    post: (options: RequestOptions) => request({...options, method: 'POST'}),
    get: (options: RequestOptions) => request({...options, method: 'GET'}),
    delete: (options: RequestOptions) =>
      request({...options, method: 'DELETE'}),
    patch: (options: RequestOptions) => request({...options, method: 'PATCH'}),
    put: (options: RequestOptions) => request({...options, method: 'PUT'}),
  },
};

export default network;
