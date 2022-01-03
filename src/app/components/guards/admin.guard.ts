import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserOperationClaimService } from 'src/app/services/user-operation-claim.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  operationClaims:string[]=[];
  constructor(private router:Router, private toastrService:ToastrService, private authService:AuthService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.isAdmin()){
        return true;
      }else{
        this.router.navigate(["/"]);
        this.toastrService.info("Admin yetkiniz kaldırılmış veya oturumunuzun süresi dolmuş olabilir.","Lütfen Yetkili Hesap Girişi Yapınız!")
        return false;
      }
  }
}
