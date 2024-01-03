import axios, { AxiosRequestConfig } from 'axios';
import { Base_URL } from './system';
import * as authService from '../Services/auth-service';



// metodo auxiliar para retornar o proprio usuario findMe
export function requestBackend(config: AxiosRequestConfig) {

  const headers = config.withCredentials
    ? {
      ...config.headers,
      Authorization: "Bearer " + authService.getAccessToken()
    }
    : config.headers;




  return axios({ ...config, baseURL: Base_URL, headers });
}



