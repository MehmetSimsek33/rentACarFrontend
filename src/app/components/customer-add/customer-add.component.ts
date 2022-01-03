import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  customerAddForm: FormGroup;
  userId=Number(localStorage.getItem("userId"))
  constructor( private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.createCustomerAddForm();
  }
  createCustomerAddForm() {
    this.customerAddForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      customerFindexPoint: ['', Validators.required],
      userId: [this.userId],
    });
  }
  add() {
    if (this.customerAddForm.valid) {
      let customerModel = Object.assign({}, this.customerAddForm.value);
      customerModel.userId = customerModel.userId;

      console.log(customerModel)
      this.customerService.add(customerModel).subscribe(
        (response) => {
          console.log(response);
          this.toastrService.success(response.message, 'Başarılı');
          this.router.navigate(['profile']);
          setTimeout(function () {
            location.reload();
          }, 400);
        },
        (responseError) => {
          if (responseError.error.ValidationErrors?.length > 0) {
            for (
              let i = 0;
              i < responseError.error.ValidationErrors?.length;
              i++
            ) {
              this.toastrService.error(
                responseError.error.ValidationErrors[i].ErrorMessage,
                'Doğrulama Hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz Eksik', 'Dikkat');
    }
  }
}

