import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { WorkersComponent } from './workers/workers.component';
import { AppRoutingModule } from './app-routing.module';
import { PurchaseRegisterComponent } from './purchase-register/purchase-register.component';
import { CreatePurchaseComponent } from './create-purchase/create-purchase.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WorkersComponent,
    PurchaseRegisterComponent,
    CreatePurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
