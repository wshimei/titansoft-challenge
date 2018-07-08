import { Component, OnInit } from '@angular/core';
import { CustomerInfo } from '../customer-info';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  customer = new CustomerInfo(1, '', true, '', '', '', '', '', '', '', '', 2, 3, true);

  countries = ['United States', 'Cananda'];

  submitted = false;

  onSubmit() { this.submitted = true; }

  // remove when done
  get diagnostic() {return JSON.stringify(this.customer);}

  constructor() { }

  ngOnInit() {
  }

}
