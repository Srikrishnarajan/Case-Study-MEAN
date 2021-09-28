import { TestBed, inject } from '@angular/core/testing';
import {HttpClientTestingModule ,HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule } from '@angular/common/http';
import { CouponsService } from './coupons.service';

describe('CouponsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [CouponsService]
    });
  });

  it('should be created', inject([CouponsService], (service: CouponsService) => {
    expect(service).toBeTruthy();
  }));
});
