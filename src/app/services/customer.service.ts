import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { CustomerDetail } from '../models/customerDetails';
import { DetailResponseModel } from '../models/detailResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl="https://localhost:44330/api/Customers/"
  constructor(private httpClient: HttpClient) { }


  getCustomers():Observable<ListResponseModel<Customer>>{
    let newApiUrl = this.apiUrl + "getall";
    return this.httpClient.get<ListResponseModel<Customer>>(newApiUrl)
  }
  getCustomersDetail() :Observable<ListResponseModel<CustomerDetail>>{

    let newApiUrl = this.apiUrl + "getcustomersdetail";

    return this.httpClient.get<ListResponseModel<CustomerDetail>>(newApiUrl);
  }

  getByUserId(userId:number):Observable<DetailResponseModel<Customer>>{
    let newPath=this.apiUrl+"getbyuserid?userId="+userId
    return this.httpClient.get<DetailResponseModel<Customer>>(newPath)
  }
  add(customer: Customer): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'add',
      customer
    );
  }
  getByCustomerId(customerId:number):Observable<DetailResponseModel<Customer>>{
    let newPath=this.apiUrl+"GetById?id="+customerId
    return this.httpClient.get<DetailResponseModel<Customer>>(newPath)
  }



  update(customer: Customer): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'update', customer
    );
  }

}
