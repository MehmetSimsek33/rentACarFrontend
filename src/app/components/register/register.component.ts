import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup
  constructor(private authService: AuthService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.creteLoginForm()
  }

  creteLoginForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  register()
  {
    if(this.registerForm.valid)
    {
      let registerModel=Object.assign({}, this.registerForm.value);
      this.authService.register(registerModel).subscribe(response=>{
        this.toastrService.success("Kayıt tamamlandi");
      },responseError=>{
        this.toastrService.error("Kullanici Mevcut")
      }

      )
    }
    else{
      this.toastrService.error("Lütfen Tüm alanları doldurunuz ");
    }
  }

}
