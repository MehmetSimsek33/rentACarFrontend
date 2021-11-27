import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrandResponseModel } from 'src/app/models/brandResponseModel';
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44330/api/Brands/getall"
  constructor(private httpClient: HttpClient) { }
  getBrands():Observable<BrandResponseModel>{
    return this.httpClient.get<BrandResponseModel>(this.apiUrl)
  }
}
