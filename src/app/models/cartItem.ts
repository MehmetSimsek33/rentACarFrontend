export class CartItem {
  carId: number;
  customerId: number;
  rentDate: Date;
  returnDate: Date;
  brandName: string;
  colorName: string;
  modelYear: number;
  dailyPrice: number;
  totalPrice: number;

  carName: string;
  imagePath:string;

}

export const CartItems: CartItem[] = [];
