import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { CartComponent } from './components/cart/cart.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { CustomerComponent } from './components/customer/customer.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminGuard } from './components/guards/admin.guard';
import { LoginGuard } from './components/guards/login.guard';

import { LoginComponent } from './components/login/login.component';
import { OperationClaimAddComponent } from './components/operation-claim-add/operation-claim-add.component';
import { OperationClaimUpdateComponent } from './components/operation-claim-update/operation-claim-update.component';
import { OperationClaimComponent } from './components/operation-claim/operation-claim.component';

import { RegisterComponent } from './components/register/register.component';
import { RentalAdComponent } from './components/rental-ad/rental-ad.component';


import { RentalComponent } from './components/rental/rental.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserOperationClaimAddComponent } from './components/user-operation-claim-add/user-operation-claim-add.component';
import { UserOperationClaimUpdateComponent } from './components/user-operation-claim-update/user-operation-claim-update.component';
import { UserOperationClaimComponent } from './components/user-operation-claim/user-operation-claim.component';


const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},



  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},

  {path:"cars/brand/:brandId/color/:colorId",component:CarComponent},
  {path:"cars/cardetail/:carId",component:CarDetailComponent},
  {path:"cars/carRental/:carId",component:CarDetailComponent,canActivate:[LoginGuard]},

  {path:"rentals/car/:carId",component:RentalAdComponent  ,canActivate:[LoginGuard]},
  {path:"rental",component:RentalComponent  ,canActivate:[AdminGuard]},


  {path:"customer",component:CustomerComponent},
  {path:"customer/add",component:CustomerAddComponent  ,canActivate:[LoginGuard]},
 {path:"customer/add",component:CustomerAddComponent  ,canActivate:[LoginGuard]},



 {path:"car/update/:carId",component:CarUpdateComponent ,canActivate:[AdminGuard]},
 {path:"car/add",component:CarAddComponent ,canActivate:[AdminGuard]},

 {path:"brand",component:BrandComponent},
 {path:"brand/add",component:BrandAddComponent,canActivate:[AdminGuard]},
 {path:"brand/update/:brandId",component:BrandUpdateComponent ,canActivate:[AdminGuard]},

 {path:"color",component:ColorComponent},
 {path:"color/add",component:ColorAddComponent  ,canActivate:[AdminGuard]},
 {path:"color/update/:colorId",component:ColorUpdateComponent ,canActivate:[AdminGuard]},

 {path:"login",component:LoginComponent},
 {path:"register",component:RegisterComponent},
 {path:"cart",component:CartComponent},


 {path:"userDetail",component:UserDetailComponent ,canActivate:[LoginGuard]},

 {path:"operationClaim", component:OperationClaimComponent ,canActivate:[AdminGuard]},
 {path:"operationClaim/add", component:OperationClaimAddComponent  ,canActivate:[AdminGuard]},
 {path: "operationClaim/update/:id", component:OperationClaimUpdateComponent ,canActivate:[AdminGuard]},

 {path: "userOperationClaim", component: UserOperationClaimComponent  ,canActivate:[LoginGuard]},
 {path: "userOperationClaim/add", component: UserOperationClaimAddComponent ,canActivate:[AdminGuard]},
 {path: "userOperationClaim/update/:id", component: UserOperationClaimUpdateComponent ,canActivate:[AdminGuard]},
//  {path:'image/add/:id', component: ImageAddComponent ,canActivate:[LoginGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
