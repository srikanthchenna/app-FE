import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { MenuComponent } from './menu/menu.component';
import { WorkersComponent } from './workers/workers.component';
import { LoadDetailsComponent } from './load-details/load-details.component';

const routes: Routes = [
	{
   	 	path: 'workers',
    	component: WorkersComponent
  	},
  	{
	    path: '',
	    component: LoadDetailsComponent
 	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}