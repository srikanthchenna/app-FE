import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PurchaseRegisterDetails} from './../../beans/purchase-register-details';
import {PurchaseAdjustments} from './../../beans/purchaseAdjustments';
import { VehicleDetails } from '../../beans/vehicle-details';


import {CreatePurchaseService} from './create-purchase.service';


@Component({
  selector: 'app-create-purchase',
  templateUrl: './create-purchase.component.html',
  styleUrls: ['./create-purchase.component.css']
})
export class CreatePurchaseComponent implements OnInit {

	purchaseRegisterForm: FormGroup;
	
  constructor(private formBuilder: FormBuilder, private createPurchase:CreatePurchaseService) { }
  
  onSubmit(purchaseOrder){
    console.log(this.purchaseRegisterForm.value);
		alert("The purchaseOrder was submitted");
		this.createPurchase.createPurchase(this.purchaseRegisterForm.value);
  }

  ngOnInit() {
  	this.purchaseRegisterForm = this.formBuilder.group({
  		sno:['',[Validators.required, Validators.minLength(2)]],
		vehicleDetails:this.formBuilder.group({
			vehicleNo:[],
			emptyWeight:[],
			loadWeight:[],
			tareWeight:[],
			weightSlip:[]
		}),

		productType:[''],
		bagsCount:[],
		quantity:[],
		quantityUnit:[],
		pricePerQuintals:[],
		purchaseAdjustments:this.formBuilder.group({
			bagsCost: [],
    		weightBridgeCost: [],
    		kulli: [],
    		miscCost: [],
    		labourCost: []
    	}),
		
		brokerName:[],
		aasamiName:[],
		finalSettlement:[],
		status:[]
    });
  }

}
