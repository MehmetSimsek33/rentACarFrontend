import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailResponseModel } from '../models/detailResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { OperationClaim } from '../models/operationClaim';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class OperationClaimService {
  apiUrl = "https://localhost:44330/api/Operation/";
  constructor(private httpClient: HttpClient) {}

  add(operationClaim: OperationClaim): Observable<ResponseModel> {
    let newApiUrl = this.apiUrl + 'add';

    return this.httpClient.post<ResponseModel>(newApiUrl, operationClaim);
  }

  update(operationClaim: OperationClaim): Observable<ResponseModel> {
    let newApiUrl = this.apiUrl + 'update';

    return this.httpClient.post<ResponseModel>(newApiUrl, operationClaim);
  }

  delete(operationClaim: OperationClaim): Observable<ResponseModel> {
    let newApiUrl = this.apiUrl + 'delete';

    return this.httpClient.post<ResponseModel>(newApiUrl, operationClaim);
  }

  getall(): Observable<ListResponseModel<OperationClaim>> {
    let newApiUrl = this.apiUrl + 'getAll';

    return this.httpClient.get<ListResponseModel<OperationClaim>>(newApiUrl);
  }

  getById(id: number): Observable<DetailResponseModel<OperationClaim>> {
    let newApiUrl = this.apiUrl + 'getById?id=' + id;

    return this.httpClient.get<DetailResponseModel<OperationClaim>>(newApiUrl);
  }
}
