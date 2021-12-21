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

  uploadImage(image: File, carId: number): Observable<ResponseModel> {
    let newPath = this.apiUrl + "api/CarsImages/add"
    const sendForm = new FormData();
    sendForm.append('carId', JSON.stringify(carId))
    sendForm.append('carImage', image, image.name)
    return this.httpClient.post<ResponseModel>(newPath, sendForm);
  }

  deleteImage(carImage: CarImage): Observable<ResponseModel> {
    let newPath = this.apiUrl + "api/CarsImages/delete";
    return this.httpClient.post<ResponseModel>(newPath, carImage);
  }
}
