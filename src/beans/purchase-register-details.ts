import {VehicleDetails} from './vehicle-details';
export class PurchaseRegisterDetails {
	sno:number;
	vehicle:VehicleDetails;//link
	productType:string;
	bagsCount:number;
	quantity:number;
	qunatityType:string;
	pricePerQuintal:number;
	purchaseAdjustment:String;//link
	brokerName:string;
	finalSettlement:number;
	status:string;
}
