import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import {FormsModule,ReactiveFormsModule} from "@angular/forms"

import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { NaviComponent } from './components/navi/navi.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { CarAddComponent } from './components/car-add/car-add.component';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { CarUpdateComponent } from './components/car-update/car-update.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegisterComponent } from './components/register/register.component';

import { CartComponent } from './components/cart/cart.component';
import { RentalAdComponent } from './components/rental-ad/rental-ad.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserOperationClaimComponent } from './components/user-operation-claim/user-operation-claim.component';
import { UserOperationClaimUpdateComponent } from './components/user-operation-claim-update/user-operation-claim-update.component';
import { UserOperationClaimAddComponent } from './components/user-operation-claim-add/user-operation-claim-add.component';
import { OperationClaimComponent } from './components/operation-claim/operation-claim.component';
import { OperationClaimUpdateComponent } from './components/operation-claim-update/operation-claim-update.component';
import { OperationClaimAddComponent } from './components/operation-claim-add/operation-claim-add.component';



@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    NaviComponent,
    CustomerComponent,
    RentalComponent,
    CarDetailComponent,
    VatAddedPipe,
    FilterPipePipe,
    CarAddComponent,

    CarUpdateComponent,
    ColorAddComponent,
    ColorUpdateComponent,
    LoginComponent,
    RegisterComponent,

    CartComponent,
    RentalAdComponent,
    UserDetailComponent,
    FooterComponent,
    UserOperationClaimComponent,
    UserOperationClaimUpdateComponent,
    UserOperationClaimAddComponent,
    OperationClaimComponent,
    OperationClaimUpdateComponent,
    OperationClaimAddComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
