import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OperationClaim } from 'src/app/models/operationClaim';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {


  reloaded = false;
  claims: OperationClaim[];
  updateUserForm: FormGroup;
  user: User;
  dataLoaded = false;

  constructor(private formBuilder:FormBuilder,
    private userService:UserService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getUserByEmail();
    this.createdUpdateUserForm();
    this.reload();
  }

  getUserByEmail(){

    let email = localStorage.getItem('email')
    this.userService.getUserByEmail(String(email))
      .subscribe((response) => {
        this.user = response.data
      })
  }

  createdUpdateUserForm(){
    this.updateUserForm = this.formBuilder.group({
      id: [localStorage.getItem("userId"), Validators.nullValidator],
      email: [localStorage.getItem("email"), Validators.required],
      firstName : [localStorage.getItem("firstName"), Validators.required],
      lastName: [localStorage.getItem("lastName"), Validators.required],
      passwordHash : [localStorage.getItem("passwordHash"), Validators.nullValidator],
      passwordSalt : [localStorage.getItem("passwordSalt"), Validators.nullValidator],
      status : [localStorage.getItem("status"),Validators.nullValidator],
      customerFindexPoint: [localStorage.getItem("customerFindexPoint"), Validators.nullValidator]
    });
  }

  update(){

    if(this.updateUserForm.valid){
      let userModel = Object.assign({}, this.updateUserForm.value);
      userModel.id = Number(userModel.id);
      userModel.status = Boolean(userModel.status);
      userModel.customerFindexPoint = Number(userModel.customerFindexPoint);

      this.userService.updateUser(userModel)
        .subscribe((response) => {
          this.toastrService.success(response.message, "Başarılı!!");
          localStorage.setItem("firstName", userModel.firstName);
          localStorage.setItem("lastName", userModel.lastName);
          localStorage.setItem("email", userModel.email);

          this.ngOnInit();
        }, responseError => {
          console.log(responseError);
        })

    }
  }

  reload() {
    if (this.reloaded == true) {
      setTimeout(function () {
        location.reload();
      });
      setTimeout(function () {
        location.reload();
      });
      setTimeout(function () {
        location.reload();
      });
      this.reloaded = true;
    }
  }
}
