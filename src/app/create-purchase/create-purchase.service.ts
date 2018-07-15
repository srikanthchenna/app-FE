import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import {PurchaseRegisterDetails} from './../../beans/purchase-register-details';


@Injectable({
  providedIn: 'root'
})
export class CreatePurchaseService {
	
	API_URL  =  'http://localhost:9090';
  constructor(private httpClient: HttpClient) { }
  
  createPurchase(purchaseRegister : PurchaseRegisterDetails){
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    const requestOptions = {                                                                                                                                                                                 
        headers: new HttpHeaders(headerDict), 
    };
    this.httpClient.post("http://localhost:9090/purchaseRegister/createPurchase",{},requestOptions);
  }
  
}
