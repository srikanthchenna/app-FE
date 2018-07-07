import {VehicleDetails} from './vehicle-details';
import {PurchaseAdjustments} from './purchaseAdjustments';
import {ProductType} from './product-type';

export class PurchaseRegisterDetails {
	id:number;
	sno:string;
	vehicleDetails:VehicleDetails;//link
	productType:ProductType;
	bagsCount:number;
	quantity:number;
	quantityUnit:string;
	pricePerQuintals:number;
	purchaseAdjustments:PurchaseAdjustments;//link
	brokerName:string;
	aasamiName:string;
	finalSettlement:number;
	status:string;
	createdDate:string;
	updatedDate:string;
	retired:boolean;
}
