import {VehicleDetails} from './vehicle-details';
export class PurchaseRegisterDetails {
	sno:string;
	vehicle:VehicleDetails;//link
	productType:string;
	bagsCount:number;
	quantity:number;
	quantityUnit:string;
	pricePerQuintals:number;
	purchaseAdjustment:String;//link
	brokerName:string;
	aasamiName:string;
	finalSettlement:number;
	status:string;
}
