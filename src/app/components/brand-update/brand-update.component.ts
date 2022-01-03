import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { CarService } from 'src/app/services/car.service';
import { ToastrService } from 'ngx-toastr';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from 'src/app/services/brand.service';
@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {
  brandUpdateForm: FormGroup;
  brand:Brand;
  constructor(    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      if (param['brandId']) {
        this.getByBrands(param['brandId']);
       // console.log((param["id"]))
      } else {
        // sayfa yönlendirmesi yap
      }
    });
    this.createBrandUpdateForm();

  }
  getByBrands(brandId: number) {
    this.brandService.getByBrands(brandId).subscribe((response) => {
      this.brand = response.data;
    console.log({brandId})
    });
  }
  createBrandUpdateForm() {
    this.brandUpdateForm = this.formBuilder.group({
      brandName: ["", Validators.required],
    });
  }

  brandUpdate() {
    if (this.brandUpdateForm.valid) {
      let carModule: Brand = { id: this.brand.id, ...this.brandUpdateForm.value };
      console.log(carModule);
      this.brandService.updateCar(carModule).subscribe((response) => {
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
