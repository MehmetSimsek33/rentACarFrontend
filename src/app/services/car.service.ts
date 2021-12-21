import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';

import { DetailResponseModel } from '../models/detailResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';


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
  GetCarDetailDto(carId:number):Observable<DetailResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"Cars/GetCarDetailDto?id="+carId
    return this.httpClient.get<DetailResponseModel<CarDetail>>(newPath)
  }
  getByCars(carId:number):Observable<DetailResponseModel<Car>>{
    let newPath=this.apiUrl+"Cars/getById?id="+carId
    return this.httpClient.get<DetailResponseModel<Car>>(newPath)
  }
  ///api/
  GetCarsWithDetailsByBrandIdAndColorId(brandId:number,colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"Cars/GetCarsWithDetailsByBrandIdAndColorId?brandId="+brandId+"&colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  add(car:Car):Observable<ResponseModel>
  {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Cars/add",car)
  }
  updateCar(car:Car): Observable<ResponseModel> {

    return this.httpClient.post<ResponseModel>(this.apiUrl+"Cars/update",car)
  }
}
