import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {



  cartList : CartItem[];
  totalPrice: number;


  constructor(private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.getCarts();
  }

  getCarts(){

    this.cartList = this.cartService.cartList();

    // this.cartList += JSON.parse(this.localStorageService.getItem("rentalInfo")!);
    // console.log(this.cartList)

    this.cartService.data
      .subscribe((response) => {
        this.totalPrice = response.cartTotal;
      })
  }



}
