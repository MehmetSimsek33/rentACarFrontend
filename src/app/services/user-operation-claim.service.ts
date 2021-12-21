import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailResponseModel } from '../models/detailResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { UserOperationClaim } from '../models/userOperationClaim';
import { UserOperationClaimDetails } from '../models/userOperationClaimDetails';

@Injectable({
  providedIn: 'root'
})
export class UserOperationClaimService {


  apiUrl = "https://localhost:44330/api/UserOperationClaim/";
  constructor(private httpClient:HttpClient) { }

  add(userOperationClaim:UserOperationClaim):Observable<ResponseModel>{
    let newApiUrl = this.apiUrl + "add";

    return this.httpClient.post<ResponseModel>(newApiUrl, userOperationClaim);
  }

  update(userOperationClaim:UserOperationClaim):Observable<ResponseModel>{
    let newApiUrl = this.apiUrl + "update";

    return this.httpClient.post<ResponseModel>(newApiUrl, userOperationClaim);
  }

  delete(userOperationClaim:UserOperationClaim):Observable<ResponseModel>{
    let newApiUrl = this.apiUrl + "delete";

    return this.httpClient.post<ResponseModel>(newApiUrl, userOperationClaim);
  }

  getall():Observable<ListResponseModel<UserOperationClaim>>{
    let newApiUrl = this.apiUrl + "getall";

    return this.httpClient.get<ListResponseModel<UserOperationClaim>>(newApiUrl);
  }

  getById(id:number):Observable<DetailResponseModel<UserOperationClaim>>{
    let newApiUrl = this.apiUrl + "getbyid?id=" + id;

    return this.httpClient.get<DetailResponseModel<UserOperationClaim>>(newApiUrl);
  }

  getByUserId(userId:number):Observable<ListResponseModel<UserOperationClaim>>{
    let newApiUrl = this.apiUrl + "getbyuserid?userId="+userId;

    return this.httpClient.get<ListResponseModel<UserOperationClaim>>(newApiUrl);
  }

  getByOperationClaimId(operationClaimId:number):Observable<ListResponseModel<UserOperationClaim>>{
    let newApiUrl = this.apiUrl + "getbyoperationclaimid?operationClaimId="+operationClaimId;

    return this.httpClient.get<ListResponseModel<UserOperationClaim>>(newApiUrl);
  }


  getAllDetails():Observable<ListResponseModel<UserOperationClaimDetails>>{
    let newApiUrl = this.apiUrl + "getalldetails";

    return this.httpClient.get<ListResponseModel<UserOperationClaimDetails>>(newApiUrl);
  }

  getDetailsById(id:number):Observable<DetailResponseModel<UserOperationClaimDetails>>{
    let newApiUrl = this.apiUrl + "getdetailsbyid?id="+ id;

    return this.httpClient.get<DetailResponseModel<UserOperationClaimDetails>>(newApiUrl);
  }

  getDetailsByOperationClaimId(operationClaimId:number):Observable<ListResponseModel<UserOperationClaimDetails>>{
    let newApiUrl = this.apiUrl + "getdetailsbyoperationclaimid?operationClaimId="+ operationClaimId;

    return this.httpClient.get<ListResponseModel<UserOperationClaimDetails>>(newApiUrl);
  }

  getDetailsByUserId(userId:number):Observable<ListResponseModel<UserOperationClaimDetails>>{
    let newApiUrl = this.apiUrl + "getdetailsbyuserid?userId="+ userId;

    return this.httpClient.get<ListResponseModel<UserOperationClaimDetails>>(newApiUrl);
  }
}
