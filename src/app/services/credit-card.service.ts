import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddForCreditCard } from '../models/addForCreditCard';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  apiUrl = "https://localhost:44330/api/CreditCards/";


  constructor(private httpClient:HttpClient) { }

  getByCustomerCartId(customerId:number):Observable<ListResponseModel<AddForCreditCard>>{
    let newApiUrl = this.apiUrl + "GetByCustomerCrediCart?id=" + customerId;

    return this.httpClient.get<ListResponseModel<AddForCreditCard>>(newApiUrl);
  }
  save(card:AddForCreditCard):Observable<ResponseModel>{
    let newApiUrl = this.apiUrl + "add";

    return this.httpClient.post<ResponseModel>(newApiUrl,card);
  }
}
