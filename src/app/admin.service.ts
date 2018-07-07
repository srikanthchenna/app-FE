import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import {PurchaseRegisterDetails} from './../beans/purchase-register-details';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
	
	API_URL  =  'http://localhost:9090';
  constructor(private httpClient: HttpClient) { }

  findAllPurchases(){
    return this.httpClient
      .get<any[]>(this.API_URL + "/purchaseRegister/findAll")
      .pipe(map(data => data['posts']));
  }

  
}
