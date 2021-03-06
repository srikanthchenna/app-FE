import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { WorkersComponent } from './workers/workers.component';
import { AppRoutingModule } from './app-routing.module';
import { PurchaseRegisterComponent } from './purchase-register/purchase-register.component';
import { CreatePurchaseComponent } from './create-purchase/create-purchase.component';
import { FilterAndSortTablePipe } from './purchase-register/filter-and-sort-table.pipe';
import { AppModelPopupComponent } from './app-model-popup/app-model-popup.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WorkersComponent,
    PurchaseRegisterComponent,
    CreatePurchaseComponent,
    FilterAndSortTablePipe,
    AppModelPopupComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
