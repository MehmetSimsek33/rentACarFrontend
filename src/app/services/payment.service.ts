import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Payment } from '../models/payment';
import { ResponseModel } from '../models/responseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  paymentApiUrl = "https://localhost:44330/api/payments/";

  constructor(private httpClient:HttpClient) { }

  payment(payment:Payment):Observable<ResponseModel>{

    let addPaymentApiUrl = this.paymentApiUrl + "add";

    return this.httpClient.post<ResponseModel>(addPaymentApiUrl, payment);

  }

}
