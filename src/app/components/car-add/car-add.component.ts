import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { BrandService } from 'src/app/services/brand.service';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { CarImagesService } from 'src/app/services/car-images.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {
  carAddForm: FormGroup;
  brands: Brand[] = [];
  colors: Color[] = [];
  maxCarImageCount:number = 2
  filePaths: string[] = [];


  carPhotoForm:FormGroup
  carPhotos:File[] = []
  selectedFiles?: File[] = []
  file:File[]=[]

  constructor(
    private carService: CarService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private colorService: ColorService,
    private brandService: BrandService,
    private carImageService:CarImagesService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.createCarAddForm();
    this.getBrands();
    this.getColors();
  }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({

      description: ['', Validators.required],
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
       CarFindexPoint: ['', Validators.required],

    });
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



  add() {
    if (this.carAddForm.valid) {
      let carModel = Object.assign({}, this.carAddForm.value);
      console.log(carModel);
      this.carService.add(carModel).subscribe(
        (response) => {
          console.log(response)
          this.toastrService.success(response.message, 'Başarılı');
          this.uploadFiles(response.data.id)
          this.router.navigate(["/"])

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
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }


  selectFiles(event: any): void {
    this.selectedFiles = event.target.files;
  }
//asenkron eklenecek
  uploadFiles(carId: number): void {
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(this.selectedFiles[i],carId);
      }
    }
  }

  upload(file: File,carId:number,): void {
    if (!file) return;

    this.carImageService.uploadCarImage(carId,file).subscribe((response) => {

      this.toastrService.success( 'Araba resmi başarıyla yüklendi!');
    });
  }


}
