import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { Rental } from 'src/app/models/rental';

import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carDetails:CarDetail


  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute,
                ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.GetCarDetailDto(params["carId"])
    })
  }

  GetCarDetailDto(carId:number)
  {
    this.carService.GetCarDetailDto(carId).subscribe((response)=>{
      this.carDetails=response.data
    })
  }
  getSliderClass(index: number) {
    if (index == 0) {
      return 'carousel-item active';
    } else {
      return 'carousel-item';
    }
  }

}
