import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {

  public serviceUrl: string = "http://localhost:5540/";

  constructor(private http: HttpClient) { }

  //function to get items
  getToCart() {
    return this.http.get(this.serviceUrl);
  }

  //function to add items to cart
  addToCart(item: { prodId: any; name: any; price: any; imageUrl: any; }) {

    let addCart = { prodId: item.prodId, name: item.name, price: item.price, imageUrl: item.imageUrl };

    return this.http.post(this.serviceUrl, addCart);

  }
  
  //function to delete items from cart
  deleteFromCart(i: { _id: string; }) {
    return this.http.delete(this.serviceUrl + i._id);
  }

}
