import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreatePurchaseService {
	
	API_URL  =  'http://localhost:9090';
  constructor(private httpClient: HttpClient) { }
  
  //createPurchase(purchaseRegister : PurchaseRegisterDetails){
  //	this.httpClient.post(`${this.API_URL}//purchaseRegister/createPurchase`,purchaseRegister);
  //}
  
}
