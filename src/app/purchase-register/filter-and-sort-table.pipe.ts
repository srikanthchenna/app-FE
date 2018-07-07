import { Pipe, PipeTransform } from '@angular/core';
import {PurchaseRegisterDetails} from './../../beans/purchase-register-details';

@Pipe({
  name: 'filterAndSortTable'
})
export class FilterAndSortTablePipe implements PipeTransform {

  transform(values: PurchaseRegisterDetails[], parms:JSON): any {
  //   if(!parms['slno'] && !parms['vno'] && !parms['productType']&&parms['aasami'] 
  //   && parms['broker'] && parms['status']
  // )
  //   return values;
  
  	if (!parms) return values;
    
   
    return values.filter(value=>
          this.checkSlno(value,parms['slno'])
        && this.checkVehicle(value,parms['vno'])
        && this.checkProductType(value,parms['productType'])
        && this.checkAasami(value,parms['aasami'])
        && this.checkBroker(value,parms['broker'])
        && this.checkStatus(value,parms['status'])

      );
  
  }
  checkVehicle(value:PurchaseRegisterDetails, vno:string){
   return vno ?value.vehicleDetails.vehicleNo.toLocaleLowerCase().includes(vno.toLocaleLowerCase()): true;
  }
  checkSlno(value:PurchaseRegisterDetails, sno:string){
    return sno ?value.sno.includes(sno): true;
   }
   checkProductType(value:PurchaseRegisterDetails, type:string){
    return type ?value.productType == type: true;
   }

   checkAasami(value:PurchaseRegisterDetails, aasami:string){
    return aasami ?value.aasamiName.toLocaleLowerCase().includes(aasami.toLocaleLowerCase()): true;
   }
   checkBroker(value:PurchaseRegisterDetails, broker:string){
    return broker ?value.brokerName.toLocaleLowerCase().includes(broker.toLocaleLowerCase()): true;
   }
   checkStatus(value:PurchaseRegisterDetails, status:string){
    return status ?value.status == status: true;
   }
}
