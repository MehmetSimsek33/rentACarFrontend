import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44330/api/"


  constructor(private httpClient: HttpClient) { }
  getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"Cars/GetByCarDetail"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarsByBrands(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"Cars/GetCarDetailsByBrandId?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  getCarsByColorss(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"Cars/GetCarDetailsByColorId?colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }



}
