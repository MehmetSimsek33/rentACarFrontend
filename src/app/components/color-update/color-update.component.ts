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
import { Color } from 'src/app/models/color';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {
  colorUpdateForm: FormGroup;
  color:Color;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private colorService: ColorService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      if (param['colorId']) {
        this.getByColors(param['colorId']);
       // console.log((param["id"]))
      } else {
        // sayfa yönlendirmesi yap
      }
    });
    this.createColorUpdateForm();

  }
  getByColors(colorId: number) {
    this.colorService.getByColors(colorId).subscribe((response) => {
      this.color = response.data;
    console.log({colorId})
    });
  }

  createColorUpdateForm() {
    this.colorUpdateForm = this.formBuilder.group({
      colorName: ["", Validators.required],
    });
  }

  colorUpdate() {
    if (this.colorUpdateForm.valid) {
      let carModule: Color = { id: this.color.id, ...this.colorUpdateForm.value };
      console.log(carModule);
      this.colorService.updateColor(carModule).subscribe((response) => {
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
