import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ColorService } from 'src/app/services/color.service';
import { Color } from 'src/app/models/color';
@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css'],
})
export class ColorAddComponent implements OnInit {
  colorAddForm: FormGroup;
  colors: Color[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private colorService: ColorService
  ) {}

  ngOnInit(): void {
    this.createColorAddForm();

    this.getColors();
  }
  createColorAddForm() {
    this.colorAddForm = this.formBuilder.group({

      colorName: ['', Validators.required],

    });
  }

  getColors(): void {
    this.colorService.getColorss().subscribe((response) => {
      this.colors = response.data;
    });
  }

  add() {
    if (this.colorAddForm.valid) {
      let colorModel = Object.assign({}, this.colorAddForm.value);
      console.log(colorModel);
      this.colorService.add(colorModel).subscribe(
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
