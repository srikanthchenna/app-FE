import { Component, OnInit } from '@angular/core';
import {PurchaseRegisterDetails} from './../../beans/purchase-register-details';
import {PurchaseAdjDetails} from './../../beans/purchaseAdjDetails';

import {PURCHASE_DETAILS} from '../../mockData/purchaseDetailsResponse';
import { VehicleDetails } from '../../beans/vehicle-details';
@Component({
  selector: 'app-purchase-register',
  templateUrl: './purchase-register.component.html',
  styleUrls: ['./purchase-register.component.css']
})
export class PurchaseRegisterComponent implements OnInit {
  purchaseList : PurchaseRegisterDetails[];
  selectedPurchaseAdj : PurchaseAdjDetails;
  selectedVehicle : VehicleDetails;
  
  constructor() { }

  ngOnInit() {
    //mocking Data
    this.purchaseList = PURCHASE_DETAILS;// TODO make this a ajax call later
   
  }

  setPurchaseAdjDetails(selectedPurchase :PurchaseRegisterDetails){
    this.selectedPurchaseAdj = selectedPurchase.purchaseAdjustment;
  }
  setVehicleDetails(selectedPurchase :PurchaseRegisterDetails){
    this.selectedVehicle = selectedPurchase.vehicle;
  }

}
