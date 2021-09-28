import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  item: any;
  resultPrice: any;

  constructor(
    private cartservice: CartService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrservice: ToastrService
  ) { }

  ngOnInit(): void {
    this.getItemsFromService();
  }

  //function to get items from product page
  getItemsFromService() {
    this.cartservice.getToCart().subscribe((response) => {
      this.item = response;
      console.log(this.item);
      this.item.forEach(item => {
        item.ordervalue = 1
        if(item.ordervalue == 0){  
          this.deleteFromCart(item);
        }
      })
    })
  }

  //function to delete an item from cart
  deleteFromCart(i) {
    this.cartservice.deleteFromCart(i).subscribe((response) => {
        alert('Do you want to delete this item from cart?');
        this.getItemsFromService();
        this.showSuccess();
    })
  }

  order() {
    this.toastrservice.success('Order placed successfully');
    this.item.forEach(item => {
      item.ordervalue = 0
      if(item.ordervalue == 0){  
        this.deleteFromCart(item)
      }
    })
  }

  //function to show success message
  showSuccess() {
    this.toastrservice.success('Item deleted successfully from cart');
  }

  /*getCoupon(coupon) {
    var button = <HTMLInputElement>document.getElementById('i');
    console.log("Coupon", coupon);
    console.log("Coupon Price", coupon.price);
    this.item.forEach(item => {
      console.log(item.price);
      this.resultPrice = item.price - ((item.price*20)/100);
      console.log(item.price);
    })
    coupon.price = this.resultPrice;
    console.log(coupon.price);
    button.disabled = true;//setting the button as disabled
    return coupon.price;
  }*/

  //function to increment / decrement the quantity of the product
  Increment(cond, item) {
    if (cond === 'up') {
      item.ordervalue++
    }
    else if (cond === 'down') {
      if (item.ordervalue > 0) {
        item.ordervalue--;
      }
      if(item.ordervalue == 0){  
        this.deleteFromCart(item);
      }
    }
  }
}
