import { CredentialsDTO } from '../models/auth';
import { CLIENT_ID, CLIENT_SECRET } from '../utils/system';


export function loginRequest(loginData: CredentialsDTO) {
  // pegando os dados do postman

  const headers = {

    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)

  }
}