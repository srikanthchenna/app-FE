import { Component, OnInit, Input } from '@angular/core';
import { VehicleDetails } from '../../beans/vehicle-details';
import {PurchaseAdjustments} from './../../beans/purchaseAdjustments';

@Component({
  selector: 'app-app-model-popup',
  templateUrl: './app-model-popup.component.html',
  styleUrls: ['./app-model-popup.component.css']
})
export class AppModelPopupComponent implements OnInit {
  @Input()
  modelType : any;
  @Input()
  modelId : any;
  @Input()
  modelData : any;
  @Input()
  modelTitle:any;

  selectedPurchaseAdj : PurchaseAdjustments;
  selectedVehicle : VehicleDetails;
  
  constructor() { }

  ngOnInit() {
  }

  showText(){
    return this.modelType == 'text'; 
  }
  showVehicle(){
    if(this.modelType == 'vehicle'){
      this.selectedVehicle = this.modelData;
      return true;
    } 
    return false;
  }
  showPurchaseAdj(){
    if(this.modelType == 'adjustment'){
      this.selectedPurchaseAdj = this.modelData
      return true;
    } 
    return false;
  }

}
