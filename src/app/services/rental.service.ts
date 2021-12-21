import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetails } from '../models/rentalDetails';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
  rental:Rental;
  apiUrl="https://localhost:44330/api/"
  constructor(private httpClient: HttpClient) { }
  getRentals():Observable<ListResponseModel<RentalDetails>>{
    let newPath=this.apiUrl+"Rentals/GetByRentalDetail"
    return this.httpClient.get<ListResponseModel<RentalDetails>>(newPath)
  }

  addRentals(rental: Rental): Observable<ResponseModel> {
    let newPath=this.apiUrl+"Rentals/add"
    return this.httpClient.post<ResponseModel>(newPath,rental)

  }
  setRental(rental:Rental){
    this.rental = rental;
  }

  getRental(){
    return this.rental;
  }
}





