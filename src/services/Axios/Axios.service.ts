import { AxiosError } from 'axios';
import camelAxios from '../../interceptors/camelAxios.interceptor';
import { ErrorData } from './Axios.types';

class AxiosFetch {
  private static instance: AxiosFetch;

  static getInstance(): AxiosFetch {
    if (!AxiosFetch.instance) {
      AxiosFetch.instance = new AxiosFetch();
    }
    return AxiosFetch.instance;
  }

  static async GETMethod<T>(url: string) {
    try {
      const response = await camelAxios.get(url);
      const responseData: T = response.data;
      return responseData;
    } catch (e) {
      const errorMessage = e as AxiosError;
      if (errorMessage.response !== null) {
        const errorData = errorMessage.response?.data as ErrorData;
        const errorString = errorData.status_message;
        throw new Error(errorString);
      }
      throw new Error('Unknown error, please return later to Filmoteca.');
    }
  }

  static async POSTMethod<T>(
    url: string,
    body: T,
    contentType: string | null = null,
  ) {
    const header = {
      headers: {
        'content-type': contentType,
      },
    };
    const withParams = async () => camelAxios.post(url, body, header);
    const withoutParams = async () => camelAxios.post(url, body);
    try {
      const asyncFunction = contentType ? withParams : withoutParams;
      const data = await asyncFunction();
      return data.data;
    } catch (e) {
      const errorMessage = e as AxiosError;
      const errorData = errorMessage.response?.data as ErrorData;
      const errorString = errorData.status_message;
      if (errorMessage.response) throw new Error(errorString);
      throw new Error('Unknown error, please return later to Filmoteca.');
    }
  }

  static async DELETEMethod<T>(url: string, body: T) {
    try {
      const data = await camelAxios.delete(url, { data: body });
      return data.data;
    } catch (e) {
      const errorMessage = e as AxiosError;
      const errorData = errorMessage.response?.data as ErrorData;
      const errorString = errorData.status_message;
      if (errorMessage.response) throw new Error(errorString);
      throw new Error('Unknown error, please return later to Filmoteca.');
    }
  }
}

export default AxiosFetch;
