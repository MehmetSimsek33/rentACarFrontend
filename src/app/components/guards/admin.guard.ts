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
  constructor(private authService:AuthService, private toastrService:ToastrService, private router:Router,private userOperationClaimService:UserOperationClaimService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.userOperationClaimService
      .getDetailsByUserId(Number(localStorage.getItem('userId')))
      .subscribe((res) => {
        res.data.forEach((claim) => {

          if (claim.operationName == 'admin') {

            return true;
          } else {
            this.router.navigate(['userOperationClaim']);
            this.toastrService.warning('Bu sayfa için yetkiniz Yok'+claim.operationName);
            return false;
          }
        });
      });
    return true;
  }

}
