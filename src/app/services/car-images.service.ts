import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/car-image';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImagesService {


  private apiUrl = "https://localhost:44330/";
  constructor(private httpClient: HttpClient) { }

  getImagePath(imagePath: string) {
    return this.apiUrl + imagePath
  }

  uploadCarImage(carId: number,image: File, ): Observable<ResponseModel> {
    let newPath = this.apiUrl + "api/CarsImages/add"
    const sendForm = new FormData();
    sendForm.append('carId', carId.toString())
    sendForm.append('image', image, image.name)
    return this.httpClient.post<ResponseModel>(newPath, sendForm);
  }

  deleteImage(carImage: CarImage): Observable<ResponseModel> {
    let newPath = this.apiUrl + "api/CarsImages/delete";
    return this.httpClient.post<ResponseModel>(newPath, carImage);
  }
}
