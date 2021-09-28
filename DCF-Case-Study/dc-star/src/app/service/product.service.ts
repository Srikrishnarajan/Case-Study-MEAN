import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Item } from '../model/product';

@Injectable()
export class ProductService {
  public serviceUrl: string = "http://localhost:3000/products";

  constructor(private http: HttpClient) { }
 
  //function to get items from the above url and cast the observable into an array
  getItems(): Observable<Item[]> {

    return this.http.get<Item[]>(this.serviceUrl);

  }
}