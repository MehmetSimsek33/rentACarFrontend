import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { CartComponent } from './components/cart/cart.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { ColorComponent } from './components/color/color.component';
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
  {path:"rental",component:RentalComponent  ,canActivate:[LoginGuard]},
  {path:"customer",component:CustomerComponent},
  {path:"color",component:ColorComponent},
 {path:"cars/brand/:brandId",component:CarComponent},
 {path:"cars/color/:colorId",component:CarComponent},

 {path:"cars/brand/:brandId/color/:colorId",component:CarComponent},
 {path:"cars/cardetail/:carId",component:CarDetailComponent},
 {path:"cars/carRental/:carId",component:CarDetailComponent},

 {path:"rentals/car/:carId",component:RentalAdComponent  ,canActivate:[AdminGuard]},





 {path:"car/update/:carId",component:CarUpdateComponent ,canActivate:[AdminGuard]},
 {path:"car/add",component:CarAddComponent ,canActivate:[LoginGuard]},


 {path:"color/add",component:ColorAddComponent  ,canActivate:[AdminGuard]},
 {path:"color/update/:colorId",component:ColorUpdateComponent ,canActivate:[AdminGuard]},

 {path:"login",component:LoginComponent},
 {path:"register",component:RegisterComponent},
 {path:"cart",component:CartComponent},


 {path:"userDetail",component:UserDetailComponent ,canActivate:[LoginGuard]},

 {path:"operationClaim", component:OperationClaimComponent ,canActivate:[AdminGuard]},
 {path:"operationClaim/add", component:OperationClaimAddComponent  ,canActivate:[AdminGuard]},
 {path: "operationClaim/update/:id", component:OperationClaimUpdateComponent ,canActivate:[AdminGuard]},

 {path: "userOperationClaim", component: UserOperationClaimComponent  ,canActivate:[AdminGuard]},
 {path: "userOperationClaim/add", component: UserOperationClaimAddComponent ,canActivate:[AdminGuard]},
 {path: "userOperationClaim/update/:id", component: UserOperationClaimUpdateComponent ,canActivate:[AdminGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
