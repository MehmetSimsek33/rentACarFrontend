import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/responseModel';
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44330/api/Brands/getall"
  constructor(private httpClient: HttpClient) { }
  getBrands():Observable<ListResponseModel<Brand>>{
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl)
  }

  add(brand:Brand):Observable<ResponseModel>
  {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Brands/add",brand)
  }
  updateCar(brand:Brand): Observable<ResponseModel> {

    return this.httpClient.post<ResponseModel>(this.apiUrl+"Brands/update",brand)
  }
}
