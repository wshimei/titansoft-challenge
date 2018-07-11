import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, OnDestroy } from '@angular/core';

import { CustomerService } from '../customer.service';
import { CustomerInterface } from '../customer-info';
import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';

declare var stripe: any;
declare var elements: any;

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit, OnDestroy {

  @ViewChild('cardInfo') cardInfo: ElementRef;

  card: any;
  cardNumber: any;
  cardCvc: any;
  cardExpiry: any;

  cardHandler = this.onChange.bind(this);
  error: string;

  customer: CustomerInterface;

  constructor(private customerService: CustomerService, private router: Router, private cd: ChangeDetectorRef) { }

  goBack(link) {
    this.router.navigate([link]);
  }

  ngOnInit() {
    this.customerService.customerInfo$.subscribe(customer => this.customer = customer);

    // this.card = elements.create('card');
    // this.card.mount(this.cardInfo.nativeElement);

    // trying
    this.cardNumber = elements.create('cardNumber');
    this.cardNumber.mount('#card-number');

    this.cardCvc = elements.create('cardCvc');
    this.cardCvc.mount('#card-cvv');

    this.cardExpiry = elements.create('cardExpiry');
    this.cardExpiry.mount('#card-expiry');

    // end trial

    // this.card.addEventListener('change', this.cardHandler);
    this.cardNumber.addEventListener('change', this.cardHandler);
    this.cardCvc.addEventListener('change', this.cardHandler);
    this.cardExpiry.addEventListener('change', this.cardHandler);
  }

  ngOnDestroy() {
    this.cardNumber.removeEventListener('change', this.cardHandler);
    this.cardNumber.destroy();
    this.cardCvc.removeEventListener('change', this.cardHandler);
    this.cardCvc.destroy();
    this.cardExpiry.removeEventListener('change', this.cardHandler);
    this.cardExpiry.destroy();
  }

  onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }

  async onSubmit(form: NgForm) {
    const { token, error } = await stripe.createToken(this.card);

    if (error) {
      console.log('Something is wrong:', error);
    } else {
      console.log('Success!', token);
      // ...send the token to the your backend to process the charge
    }
  }
}
