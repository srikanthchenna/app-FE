import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-load-details',
  templateUrl: './load-details.component.html',
  styleUrls: ['./load-details.component.css']
})
export class LoadDetailsComponent implements OnInit {

  loadDetails$: Object;
  
  constructor(private adminService: AdminService) { }

  ngOnInit() {
  	this.adminService.getloadDetails().subscribe(
      data => this.loadDetails$ = data 
    );
  }

}
