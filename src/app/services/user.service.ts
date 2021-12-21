import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailResponseModel } from '../models/detailResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://localhost:44330/api/Users/"
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<ListResponseModel<User>>{
    let newApiUrl = this.apiUrl + "getall";

    return this.httpClient.get<ListResponseModel<User>>(newApiUrl);
  }

  getUserByEmail(email:string){
    let newApiUrl = this.apiUrl + "getuserbyemail?email=" +email;

    return this.httpClient.get<DetailResponseModel<User>>(newApiUrl);
  }

  getUserById(id:number):Observable<DetailResponseModel<User>>{

    let newApiUrl = this.apiUrl + "get?id=" + id;

    return this.httpClient.get<DetailResponseModel<User>>(newApiUrl);
  }

  updateUser(user:User):Observable<ResponseModel>{
    let newApiUrl = this.apiUrl + "update";

    return this.httpClient.post<ResponseModel>(newApiUrl, user);
  }
}
