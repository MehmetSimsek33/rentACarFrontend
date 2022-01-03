import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/responseModel';
import { DetailResponseModel } from '../models/detailResponseModel';
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44330/api/"
  constructor(private httpClient: HttpClient) { }
  getBrands():Observable<ListResponseModel<Brand>>{


    let newPatch=this.apiUrl+"Brands/getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newPatch)
  }

  add(brand:Brand):Observable<ResponseModel>
  {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Brands/add",brand)
  }
  updateCar(brand:Brand): Observable<ResponseModel> {

    return this.httpClient.post<ResponseModel>(this.apiUrl+"Brands/update",brand)
  }
  getByBrands(brandId:number):Observable<DetailResponseModel<Brand>>{
    let newPath=this.apiUrl+"Brands/GetById?brandId="+brandId
    return this.httpClient.get<DetailResponseModel<Brand>>(newPath)
  }
  delete(brand:Brand):Observable<ResponseModel>
  {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Brands/delete",brand)
  }



}
