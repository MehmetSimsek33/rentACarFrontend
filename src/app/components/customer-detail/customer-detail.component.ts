import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customerUpdateForm: FormGroup;
  customer: Customer;
  userId: number;
  customerId: number;
  companyName: string;

  constructor( private customerService: CustomerService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.getCustomeByUserId();
    this.createUpdateForm();
  }
  getCustomerById(id: number) {
    this.customerService.getByCustomerId(id).subscribe((response) => {

      this.companyName = response.data.companyName;
        console.log(response.data.id
          +"aa")
      this.customerId = response.data.id;
      this.userId = response.data.userId;
      this.createUpdateForm();
    });
  }
  createUpdateForm() {
    this.customerUpdateForm = this.formBuilder.group({
      userId: [localStorage.getItem('userId'), Validators.required],
      customerId: [{ value: Number(this.customerId), disabled: true }],
      companyName: [this.companyName, Validators.nullValidator],


    });
  }
  getCustomeByUserId() {
    console.log("iceri")
    this.customerService
      .getByUserId(Number(localStorage.getItem('userId')))
      .subscribe((response) => {
        this.customer = response.data;
        console.log(this.customer.id)
        if (response.data != null) {
        localStorage.setItem('customerId', String(this.customer?.id));
          this.getCustomerById(
            this.customer.id
          );

        }

      });
  }  update() {
    if (this.customerUpdateForm.valid) {
      let customerModel: Customer = Object.assign(
        {},
        this.customerUpdateForm.getRawValue()
      );
      customerModel.userId = Number(customerModel.userId);
      customerModel.id = this.customerId
      console.log(customerModel)
      this.customerService.update(customerModel).subscribe((response) => {
        this.toastrService.success(response.message, 'Başarılı');
        setTimeout(function () {
          location.reload();
        }, 400);
      });
    } else {
      this.toastrService.error( 'Formunuz eksik', 'Dikkat');
    }
  }


}
