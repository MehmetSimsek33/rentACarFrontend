import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { ToastrService } from 'ngx-toastr';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ColorService } from 'src/app/services/color.service';
import { BrandService } from 'src/app/services/brand.service';
import { Color } from 'src/app/models/color';
import { Brand } from 'src/app/models/brand';

import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css'],
})
export class CarUpdateComponent implements OnInit {
  carUpdateForm: FormGroup;
  car: Car;

  brands: Brand[] = [];
  colors: Color[] = [];
  constructor(
    private carService: CarService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private colorService: ColorService,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      if (param['carId']) {
        this.getCars(param['carId']);
       // console.log((param["id"]))
      } else {
        // sayfa yönlendirmesi yap
      }
    });
    this.createCarUpdateForm();
    this.getBrands();
    this.getColors();
  }

  getBrands(): void {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getColors(): void {
    this.colorService.getColorss().subscribe((response) => {
      this.colors = response.data;
    });
  }
  getCars(carId: number) {
    this.carService.getByCars(carId).subscribe((response) => {
      this.car = response.data;
    console.log({carId})
    });
  }
  createCarUpdateForm() {
    this.carUpdateForm = this.formBuilder.group({

      brandId: ["", Validators.required],
      colorId: ['', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  carUpdate() {
    if (this.carUpdateForm.valid) {
      let carModule: Car = { id: this.car.id, ...this.carUpdateForm.value };
      console.log(carModule);
      this.carService.updateCar(carModule).subscribe((response) => {
        this.toastrService.success(response.message, 'Başarılı');
      },
      (responseError) => {
        if (responseError.error.Errors.length > 0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(
              responseError.error.Errors[i].ErrorMessage,
              'Dogrulama Hatasi'
            );
          }
        }
      }
    );
    }
    else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }
}
