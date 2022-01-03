import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { AuthService } from 'src/app/services/auth.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
colors:Color[]=[]
emptyColor:Color;
  constructor(private colorService:ColorService,
    private toastrService:ToastrService,
    private authService:AuthService,
    private router:Router) { }
  currentColor:Color;
  ngOnInit(): void {

    this.getColors()
  }
  getColors()
  {
    this.colorService.getColorss().subscribe((response)=>
    this.colors=response.data
    )
  }
  setCurrentColor(color:Color)
  {
    this.currentColor=color

    this.toastrService.success(color.colorName +" "+ "Renkli Araclar Listelendi")
  }
    getCurrentColorClass(color:Color)
  {
    if(color==this.currentColor)
    {
      return "list-group-item active";
    }
    else{
      return "list-group-item";
    }
  }
  getAllColorClass(){
    if(!this.currentColor){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
   }
  clearCurrentColor() {
    this.currentColor = this.emptyColor;
  }
  isadmin()
  {
    if(this.authService.isAdmin())
      {
        return true
      }
      else
      {
        return false
      }

  }
  deleteColor(color : Color){
    this.colorService.delete(color).subscribe();
    this.toastrService.success("Renk Başarılı silindi :)")
    this.router.navigate(['/'])

  }

}

