import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkersComponent } from './workers/workers.component';
import { PurchaseRegisterComponent } from './purchase-register/purchase-register.component';
import { CreatePurchaseComponent } from './create-purchase/create-purchase.component';


const routes: Routes = [

	{
   	 	path: 'workers',
    	component: WorkersComponent
  	},
	{
   	 	path: '',
    	component: PurchaseRegisterComponent
  	},
  	{
   	 	path: 'createPurchase',
    	component: CreatePurchaseComponent
  	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}