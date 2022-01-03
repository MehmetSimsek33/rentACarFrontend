import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { AuthService } from 'src/app/services/auth.service';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  currentBrand: Brand;
  constructor(
    private brandservice: BrandService,
    private authService: AuthService,
    private toastrService:ToastrService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.getBrands();
  }
  getBrands() {
    this.brandservice
      .getBrands()
      .subscribe((response) => (this.brands = response.data));
  }
  setCurrentCategory(brand: Brand) {
    this.currentBrand = brand;
  }
  getCurrentBrandClass(brand: Brand) {
    if (brand == this.currentBrand) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
  isadmin() {
    if (this.authService.isAdmin()) {
      return true;
    } else {
      return false;
    }
  }

  deleteBrand(brand: Brand) {
    this.brandservice.delete(brand).subscribe();
    this.toastrService.success('Renk Başarılı silindi :)');
    this.router.navigate(['/']);
  }
}
