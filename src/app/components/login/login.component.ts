import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private userService:UserService,
    private router:Router,

  ) {}

  ngOnInit(): void {
    this.creteLoginForm();
    this.isAuth();
  }

  creteLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    if (this.loginForm.valid) {
      let loginModel = Object.assign({}, this.loginForm.value);

      this.authService.login(loginModel).subscribe(response=>{
        console.log(response)
        this.toastrService.info(response.message);


        localStorage.setItem("token",response.data.token)

        this.userService.getUserByEmail(String(loginModel.email))
            .subscribe((response) => {
              localStorage.setItem("userId", String(response.data.id));
              localStorage.setItem("firstName", response.data.firstName);
              localStorage.setItem("lastName", response.data.lastName);
              localStorage.setItem("passwordHash", response.data.passwordHash);
              localStorage.setItem("passwordSalt", response.data.passwordSalt);
              localStorage.setItem("email", response.data.email);
              this.authService.authControl();

              this.toastrService.success(response.message, "Başarılı")
            } )
            this.router.navigate(["/"]);

      },responseError=>{
        this.toastrService.error(responseError.error)
      })
    }

  }


  isAuth() {
    if(this.authService.isAuthenticated())
    {
      this.router.navigate(["/"])
    }
  }

}
