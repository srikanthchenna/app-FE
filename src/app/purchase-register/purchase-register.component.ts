import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CommonModule } from '@angular/common';
import {PurchaseRegisterDetails} from './../../beans/purchase-register-details';
import {PurchaseAdjustments} from './../../beans/purchaseAdjustments';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';
import { tap } from 'rxjs/operators';

//import {PURCHASE_DETAILS} from '../../mockData/purchaseDetailsResponse';
import { VehicleDetails } from '../../beans/vehicle-details';
import {ProductType} from '../../beans/product-type';

import { AdminService } from './../admin.service';

@Component({
  selector: 'app-purchase-register',
  templateUrl: './purchase-register.component.html',
  styleUrls: ['./purchase-register.component.css']
})
export class PurchaseRegisterComponent implements OnInit {

  //purchaseList$ : any=[];
  purchaseList : PurchaseRegisterDetails[];
  loadNow : boolean = false;
  selectedPurchaseAdj : PurchaseAdjustments;
  selectedVehicle : VehicleDetails;
  API_URL  =  'http://localhost:9090';
  constructor(private adminService : AdminService,private httpClient: HttpClient) { }

  ngOnInit() {
    this.loadNow = false;
    //mocking Data 
    //this.purchaseList = PURCHASE_DETAILS;// TODO make this a ajax call later
   	this.adminService.findAllPurchases()
   			.subscribe( (data : any)=> {
            console.log("logging find all "+ JSON.stringify(data));
   			    this.purchaseList = data;
         });
     /*    this.adminService.findAllPurchases()
   			.subscribe( data => {
            console.log("logging find all "+ JSON.stringify(data));
   			    this.purchaseList = data;
         });*/
         
     
  }

  public loadhtml(){
    return this.purchaseList.length > 0;
  }
  getString(purchase){
    return JSON.stringify(purchase);
  }

  setPurchaseAdjDetails(selectedPurchase :PurchaseRegisterDetails){
    this.selectedPurchaseAdj = selectedPurchase.purchaseAdjustments;
  }
  setVehicleDetails(selectedPurchase :PurchaseRegisterDetails){
    this.selectedVehicle = selectedPurchase.vehicleDetails;
  }

  getTotalAdjustmentsForPurchase(purchaseAdj : PurchaseAdjustments){
  
  	return purchaseAdj.bagsCost+
            purchaseAdj.weightBridgeCost+
              purchaseAdj.kulli+
                purchaseAdj.miscCost+
                  purchaseAdj.labourCost;
  }

}
