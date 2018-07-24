import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
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
	purchaseList : PurchaseRegisterDetails[];
  constructor(private httpClient: HttpClient) { }

  findAllPurchases() : Observable<any> {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Basic c3Jpa2FudGg6c3Jpa2FudGg='
    };

    const requestOptions = {                                                                                                                                                                                 
        headers: new HttpHeaders(headerDict), 
    };
    return  this.httpClient.get(this.API_URL + "/purchaseRegister/findAll",requestOptions).
    //pipe(tap(data => {this.purchaseList = <PurchaseRegisterDetails[]>data}));
    map((response: Response) => response);
  }

  findAll() {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Basic c3Jpa2FudGg6c3Jpa2FudGg='
    };

    const requestOptions = {                                                                                                                                                                                 
        headers: new HttpHeaders(headerDict), 
    };
    return  this.httpClient.get(this.API_URL + "/purchaseRegister/findAll",requestOptions);
  }

}
