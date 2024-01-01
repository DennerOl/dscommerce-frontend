import QueryString from 'qs';
import { CredentialsDTO } from '../models/auth';
import { CLIENT_ID, CLIENT_SECRET } from '../utils/system';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from '../utils/requests';
import * as accessTokenRepository from '../localStorage/access-token-repository';

export function loginRequest(loginData: CredentialsDTO) {
  // pegando os dados do postman com senha da aplicação

  const headers = {

    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
  }
  // tratando os dados do user
  const requestBody = QueryString.stringify({ ...loginData, grant_type: "password" });

  console.log(loginData);

  // mandando a requisição para back-end
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/oauth2/token",
    data: requestBody,
    headers
  }
  return requestBackend(config);
}


export function logout() {
  accessTokenRepository.remove();
}

export function saveAccessToken(token: string) {
  accessTokenRepository.save(token);
}

export function getAccessToken() {
  return accessTokenRepository.get();
}