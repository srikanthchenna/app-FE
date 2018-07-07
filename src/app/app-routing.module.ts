import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkersComponent } from './workers/workers.component';
import { PurchaseRegisterComponent } from './purchase-register/purchase-register.component';
import { CreatePurchaseComponent } from './create-purchase/create-purchase.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [

	{
   	 	path: '',
    	component: DashboardComponent
  	},
	{
   	 	path: 'viewPurchase',
    	component: PurchaseRegisterComponent
  	},
  	{
   	 	path: 'createPurchase',
    	component: CreatePurchaseComponent
  	},
  	{
   	 	path: 'workers',
    	component: WorkersComponent
  	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}