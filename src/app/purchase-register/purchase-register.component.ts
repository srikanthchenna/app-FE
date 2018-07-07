import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CommonModule } from '@angular/common';
import {PurchaseRegisterDetails} from './../../beans/purchase-register-details';
import {PurchaseAdjustments} from './../../beans/purchaseAdjustments';

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

  purchaseList : any;
 // public purchaseList$ : Observable<PurchaseRegisterDetails[]>;
  selectedPurchaseAdj : PurchaseAdjustments;
  selectedVehicle : VehicleDetails;
  
  constructor(private adminService : AdminService) { }

  ngOnInit() {
    //mocking Data 
    //this.purchaseList = PURCHASE_DETAILS;// TODO make this a ajax call later
   	this.adminService.findAllPurchases()
   			.subscribe(data => {
   			this.purchaseList = data;
   	});
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
