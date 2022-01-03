import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css'],
})
export class BrandAddComponent implements OnInit {
  brandAddForm: FormGroup;
  brands: Brand[] = [];
  constructor(
    private brandService: BrandService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createBrandAddForm();

    this.getBrands();

  }

  createBrandAddForm() {
    this.brandAddForm = this.formBuilder.group({

      brandName: ['', Validators.required],

    });
  }
  getBrands(): void {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
  add() {
    if (this.brandAddForm.valid) {
      let brandModel = Object.assign({}, this.brandAddForm.value);
      console.log(brandModel);
      this.brandService.add(brandModel).subscribe(
        (response) => {
          console.log(response);
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
    } else {
      console.log('boşş');
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }
}
