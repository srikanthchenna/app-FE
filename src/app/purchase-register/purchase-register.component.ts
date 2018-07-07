import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {PurchaseRegisterDetails} from './../../beans/purchase-register-details';
import {PurchaseAdjustments} from './../../beans/purchaseAdjustments';

import {PURCHASE_DETAILS} from '../../mockData/purchaseDetailsResponse';
import { VehicleDetails } from '../../beans/vehicle-details';
import { AdminService } from './../admin.service';

@Component({
  selector: 'app-purchase-register',
  templateUrl: './purchase-register.component.html',
  styleUrls: ['./purchase-register.component.css']
})
export class PurchaseRegisterComponent implements OnInit {
  purchaseList : PurchaseRegisterDetails[];
  selectedPurchaseAdj : PurchaseAdjustments;
  selectedVehicle : VehicleDetails;
  
  constructor(private adminService : AdminService, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    //mocking Data
    this.purchaseList = PURCHASE_DETAILS;// TODO make this a ajax call later
   	
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
