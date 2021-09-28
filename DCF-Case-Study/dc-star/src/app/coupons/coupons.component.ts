import { Component, OnInit } from '@angular/core';
import { CouponsService } from '../service/coupons.service';
import { Router } from '@angular/router';
import { Coupon } from '../model/coupon';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {

  coupons: Coupon[];

  constructor(private couponService: CouponsService, private router: Router) { }

  getCouponsFromSerive(){
    this.couponService.getCoupons().subscribe((data) => {
      this.coupons = data;
      console.log(this.coupons);
    })
  }
  ngOnInit(): void {
    this.getCouponsFromSerive();
  }

}
