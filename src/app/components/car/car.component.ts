import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[]=[]
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
    if(params["brandId"])
    {
      this.getCarsByBrands(params["brandId"])
    }
    else if(params["colorId"])
    {
      this.getCarsByColorss(params["colorId"])
    }


    else{
      this.getCars()
    }
  })
  }
  getCars()
  {
    this.carService.getCars().subscribe((response)=>{
      this.cars=response.data
    })
  }
  getCarsByBrands(brandId:number)
  {
    this.carService.getCarsByBrands(brandId).subscribe((response)=>{
      this.cars=response.data
    })
  }
  getCarsByColorss(colorId:number)
  {
    this.carService.getCarsByColorss(colorId).subscribe((response)=>{
      this.cars=response.data
    })
  }

}
