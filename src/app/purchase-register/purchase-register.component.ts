import { Component, OnInit } from '@angular/core';
import {PurchaseRegisterDetails} from './../../beans/purchase-register-details';
import {PURCHASE_REG_HEADER} from './../../beans/headerConst/purchaseRegisterHeaders';

import {PURCHASE_DETAILS} from '../../mockData/purchaseDetailsResponse';
@Component({
  selector: 'app-purchase-register',
  templateUrl: './purchase-register.component.html',
  styleUrls: ['./purchase-register.component.css']
})
export class PurchaseRegisterComponent implements OnInit {
  purchaseList : PurchaseRegisterDetails[];
  purchaseHeader: string[];
  
  constructor() { }

  ngOnInit() {
    this.purchaseList = PURCHASE_DETAILS;// TODO make this a ajax call later
  this.purchaseHeader = PURCHASE_REG_HEADER;
  }

}
