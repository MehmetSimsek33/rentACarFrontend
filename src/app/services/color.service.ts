import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { DetailResponseModel } from '../models/detailResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl="https://localhost:44330/api/"
  constructor(private httpClient: HttpClient) { }
  getColorss():Observable<ListResponseModel<Color>>{
    let newPath=this.apiUrl+"Colors/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath)
  }

  add(color:Color):Observable<ResponseModel>
  {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Colors/add",color)
  }
  updateColor(color:Color): Observable<ResponseModel> {

    return this.httpClient.post<ResponseModel>(this.apiUrl+"Colors/update",color)
  }
  delete(color:Color):Observable<ResponseModel>
  {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Colors/delete",color)
  }
  getByColors(colorId:number):Observable<DetailResponseModel<Color>>{
    let newPath=this.apiUrl+"Colors/GetById?colorId="+colorId
    return this.httpClient.get<DetailResponseModel<Color>>(newPath)
  }





}
