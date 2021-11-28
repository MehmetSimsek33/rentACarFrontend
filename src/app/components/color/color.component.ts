import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
colors:Color[]=[]
  constructor(private colorService:ColorService) { }
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

}

