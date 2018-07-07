import {VehicleDetails} from './vehicle-details';
import {PurchaseAdjustments} from './purchaseAdjustments';

export class PurchaseRegisterDetails {
	sno:string;
	vehicleDetails:VehicleDetails;//link
	productType:string;
	bagsCount:number;
	quantity:number;
	quantityUnit:string;
	pricePerQuintals:number;
	purchaseAdjustments:PurchaseAdjustments;//link
	brokerName:string;
	aasamiName:string;
	finalSettlement:number;
	status:string;
}
