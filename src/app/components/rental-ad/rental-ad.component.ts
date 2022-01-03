import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { Rental } from 'src/app/models/rental';
import { AddForCreditCard } from 'src/app/models/addForCreditCard';

@Component({
  selector: 'app-rental-ad',
  templateUrl: './rental-ad.component.html',
  styleUrls: ['./rental-ad.component.css']
})
export class RentalAdComponent implements OnInit {
  userId=Number(localStorage.getItem("userId"))
  customer:Customer
  customerId:number
  rental:Rental
  creditCardForm:FormGroup;
  minStartDate: Date = new Date();
  minEndDate: Date = new Date();
  startDate: Date = new Date();
  endDate: Date = new Date();
  carForDetail:CarDetail
  diff: number = 0;
  money: number = 0;
  checkBox:boolean=false;
  DateTimeNow: Date = new Date();
  rentDate: Date = this.DateTimeNow;
  returnDate: Date = this.DateTimeNow;
  paymentPage: boolean = false;
  isCardExist:boolean = true;
  creditCards:AddForCreditCard[]
  constructor(private rentalService: RentalService,
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService,
    private paymentService: PaymentService,
    private customerService:CustomerService,


    private formBuilder:FormBuilder,
    private creditCardService:CreditCardService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.GetCarDetailDto(params["carId"])
    });
    this.createCreditCardForm();
    this.getCustomerId(this.userId)

  }



  GetCarDetailDto(carId:number)
  {
    this.carService.GetCarDetailDto(carId).subscribe((response)=>{
      this.carForDetail=response.data
    })
  }
  rentCar() {
    let newRental: Rental = {
      carId: this.carForDetail.id,

      customerId: this.customerId,
      rentDate: new Date(this.rentDate),
      returnDate: new Date(this.returnDate),

    };
    this.rentalService.addRentals(newRental).subscribe(
      (s) => {
        this.toastrService.success(s.message, 'Başarılı');
        this.router.navigate(["/"])

        //this.payMessage();
      },
      (e) => {
        this.toastrService.error(e.error.message, 'HATA!');
      }
    );

  }
  saveCreditCards(){
    if (this.creditCardForm.valid) {
      let newModel = this.creditCardForm.value;
      newModel.customerId = Number(this.customerId);
      console.log(newModel)

      this.creditCardService.save(newModel).subscribe(response=>{
        console.log(response)
      }, responseError => {
        this.toastrService.error("Kart Bilgileri Eklenirken Bir Sorun Oluştu", "Hata!")
      })
    }

   // this.rentCar();
  }
  saveCreditCard(){
    if(this.creditCardForm.valid){
      let newModel = this.creditCardForm.value;
      newModel.customerId = Number(this.customerId);;
      newModel.cvv = String(newModel.cvv);
      console.log(newModel)



      this.creditCardService.save(newModel)
        .subscribe((response) => {
          this.toastrService.success("Kart Bilgileri Eklendi", "Başarılı");
        }, responseError => {
          this.toastrService.error("Kart Bilgileri Eklenirken Bir Sorun Oluştu", "Hata!")
        })
    }
        this.rentCar();
  }


  GetCreditCard(customerId:number)
  {
    this.creditCardService.getByCustomerCartId(customerId).subscribe((response)=>{
      this.creditCards=response.data
      if (response.data.length == 0) {
        this.isCardExist=false
        console.log(this.isCardExist)
      }else{
        this.isCardExist=true
      }
    })
  }
  goToPayment() {
    this.paymentPage = true;
    this.GetCreditCard(this.customerId);
    console.log(this.isCardExist)


  }
  goToBack() {
    this.paymentPage = false;
  }


  createCreditCardForm(){
    this.creditCardForm = this.formBuilder.group({
      nameOnTheCard:["",Validators.required],
      cardNumber:["",Validators.required],
      expirationDate:["",Validators.required],
      cvv:["",Validators.required],

    })
  }


  checkBoxTicked(event:any){
    this.checkBox = event.target.checked;
    console.log(event)
  }


  calculateDiff() {
    let startDate = new Date(this.startDate);
    let endDate = new Date(this.endDate);
    let diff = Math.abs(endDate.getTime() - startDate.getTime());
    this.diff = Math.ceil(diff / (1000 * 3600 * 24));
    this.money = this.diff * this.carForDetail.dailyPrice;
  }
  getCustomerId(userId:number)
  {
    this.customerService.getByUserId(userId).subscribe((response)=>{
      this.customer=response.data
      this.customerId=this.customer.id
      this.GetCreditCard(this.customerId)
      console.log(this.customer)
      console.log(this.customer.id)
    })
  }

}
