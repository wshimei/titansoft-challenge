import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../customer.service';
import { CustomerInterface } from '../customer-info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {

  customer: CustomerInterface;

  constructor(private customerService: CustomerService, private router: Router) { }

  goBack(link) {
    this.router.navigate([link]);
  }

  ngOnInit() {
    this.customerService.customerInfo$.subscribe(customer => this.customer = customer);
  }

}
