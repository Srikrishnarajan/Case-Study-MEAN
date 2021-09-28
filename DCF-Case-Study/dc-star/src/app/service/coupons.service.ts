import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Coupon } from '../model/coupon';

@Injectable()
export class CouponsService {
  public serviceUrl: string = "http://localhost:2540/coupons";

  constructor(private http: HttpClient) { }
 
  //function to get coupons from the above url and cast the observable into an array
  getCoupons(): Observable<Coupon[]> {

    return this.http.get<Coupon[]>(this.serviceUrl);

  }
}



