import { TestBed, inject } from '@angular/core/testing';
import {HttpClientTestingModule ,HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule } from '@angular/common/http';
import { CartService } from './cart.service';

describe('CartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [CartService]
    });
  });

  it('should be created', inject([CartService], (service: CartService) => {
    expect(service).toBeTruthy();
  }));
});
