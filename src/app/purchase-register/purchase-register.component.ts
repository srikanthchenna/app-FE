import { Component, OnInit } from '@angular/core';
import {PurchaseRegisterDetails} from './../../beans/purchase-register-details'

@Component({
  selector: 'app-purchase-register',
  templateUrl: './purchase-register.component.html',
  styleUrls: ['./purchase-register.component.css']
})
export class PurchaseRegisterComponent implements OnInit {
  purchaseList : PurchaseRegisterDetails[];
  constructor() { }

  ngOnInit() {
  }

}
