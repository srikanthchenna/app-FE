import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-purchase',
  templateUrl: './create-purchase.component.html',
  styleUrls: ['./create-purchase.component.css']
})
export class CreatePurchaseComponent implements OnInit {

	addForm: FormGroup;
	
  constructor(private formBuilder: FormBuilder) { }
  
  onSubmit(purchaseOrder){
    console.log(purchaseOrder.value);
    alert("The purchaseOrder was submitted");
  }

  ngOnInit() {
  	this.addForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

}
