import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetailResponseModel } from '../models/detailResponseModel';
import { loginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { TokenModel } from '../models/tokenModel';



@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://localhost:44330/api/auth/';
  constructor(private httpClient: HttpClient) {}


  login(user: loginModel) {
    return this.httpClient.post<DetailResponseModel<TokenModel>>(this.apiUrl + 'login', user);
  }
  register(user:RegisterModel)
  {
    return this.httpClient.post<DetailResponseModel<TokenModel>>(this.apiUrl + 'register', user);
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }


}
