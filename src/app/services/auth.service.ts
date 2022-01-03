import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetailResponseModel } from '../models/detailResponseModel';
import { loginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { TokenModel } from '../models/tokenModel';
import { UserOperationClaimService } from './user-operation-claim.service';
import { UserService } from './user.service';



@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://localhost:44330/api/auth/';
  constructor(private httpClient: HttpClient,private userService:UserService,private userOperationClaimService:UserOperationClaimService) {}


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
  authControl(){
    let mail = localStorage.getItem("email");
    console.log("aa")

      this.userService.getUserByEmail(mail).subscribe(responseUser=>{
        console.log(responseUser.data)
        this.userOperationClaimService.getDetailsByUserId(responseUser.data.id).subscribe(responseClaim=>{
          for(let i=0; i<responseClaim.data.length; i++){
            if(responseClaim.data[i].operationName=="admin"){
              localStorage.setItem("auth", "admin")
            }
            else{
              console.log("yetkimiz yok")
            }
          }
        })
      });
  }
  isAdmin(){
    if(localStorage.getItem("auth")=="admin"){
      return true;
    }else{
      return false;
    }
  }

}
