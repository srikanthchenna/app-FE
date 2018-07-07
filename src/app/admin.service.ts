import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';
import { tap } from 'rxjs/operators';

import {PurchaseRegisterDetails} from './../beans/purchase-register-details';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
	
	API_URL  =  'http://localhost:9090';
	purchaseList : any;
  constructor(private httpClient: HttpClient) { }

  findAllPurchases() {
    return  this.httpClient.get(this.API_URL + "/purchaseRegister/findAll").pipe(tap(data => {this.purchaseList = data}));
  }

}
