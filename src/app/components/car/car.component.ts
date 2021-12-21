import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carsDetails:CarDetail[]=[]
  colors: Color[] = [];
  brands: Brand[] = [];
  selectedBrandId:number
  selectedColorId:number
  filterText: '';
  routeLink = ""
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private brandService: BrandService,
    private colorService: ColorService

  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
        this.getBrands()
        this.getColors()
      if (params['brandId'] && params['colorId']) {
        this.GetCarsWithDetailsByBrandIdAndColorId(
          params['brandId'],
          params['colorId']
        );
      }
   else  if(params["brandId"])
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

    });
  }
  getColors() {
    this.colorService
      .getColorss()
      .subscribe((response) => (this.colors = response.data));
  }
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }
  getCarsByBrands(brandId: number) {
    this.carService.getCarsByBrands(brandId).subscribe((response) => {
      this.cars = response.data;
    });
  }
  getCarsByColorss(colorId: number) {
    this.carService.getCarsByColorss(colorId).subscribe((response) => {
      console.log(response.data)
      this.cars = response.data;
    });
  }
  GetCarsWithDetailsByBrandIdAndColorId(brandId: number, colorId: number) {
    this.carService
      .GetCarsWithDetailsByBrandIdAndColorId(brandId, colorId)
      .subscribe((response) => {
        console.log(response.data)
        this.cars = response.data;
      });
  }

  changeRouteLink(){
    if (this.selectedBrandId!==undefined && this.selectedColorId!==undefined) {
      this.routeLink = "/cars/brand/" + this.selectedBrandId + "/color/" + this.selectedColorId
      return this.routeLink
    }else if(this.selectedBrandId==undefined && this.selectedColorId!==undefined){
      this.routeLink = "/cars/color/" + this.selectedColorId
      return this.routeLink
    }else if(this.selectedBrandId!==undefined && this.selectedColorId == undefined){
      this.routeLink = "/cars/brand/" + this.selectedBrandId
      return this.routeLink
    }else{
      this.routeLink = "/"
      return this.routeLink
    }
  }
}
