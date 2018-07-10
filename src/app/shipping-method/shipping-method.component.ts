import { Router } from '@angular/router';
import { CustomerInterface } from './../customer-info';
import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping-method',
  templateUrl: './shipping-method.component.html',
  styleUrls: ['./shipping-method.component.css']
})
export class ShippingMethodComponent implements OnInit {

  customer: CustomerInterface;

  constructor(private customerService: CustomerService, private router: Router) { }

  goBack() {
    this.router.navigate(['/customer-information']);
  }

  updateShipping() {
    console.log(this.customer);
    this.customerService.addCustomer(this.customer.shippingMethod);
    this.router.navigate(['/payment-method']);
  }

  ngOnInit() {
    this.customerService.customerInfo$.subscribe(customer => this.customer = customer);
  }

}
