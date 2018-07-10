import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CustomerInterface } from './../customer-info';
import { CustomerService } from './../customer.service';

@Component({
  selector: 'app-shipping-method',
  templateUrl: './shipping-method.component.html',
  styleUrls: ['./shipping-method.component.css']
})
export class ShippingMethodComponent implements OnInit {

  customer: CustomerInterface;
  submitted = false;

  constructor(private customerService: CustomerService, private router: Router) { }

  goBack() {
    this.router.navigate(['/customer-information']);
  }

  updateShipping() {
    this.customerService.addCustomer(this.customer.shippingMethod);
    this.submitted = true;
    this.router.navigate(['/payment-method']);
  }

  ngOnInit() {
    this.customerService.customerInfo$.subscribe(customer => this.customer = customer);
  }

}
