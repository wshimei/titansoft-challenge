import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, OnDestroy } from '@angular/core';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { CustomerInterface } from '../customer-info';
import { PaymentService } from './../payment.service';
import { PaymentInterface } from './../paymentInterface';

declare var stripe: any;
declare var elements: any;
declare var $: any;

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit, OnDestroy {

  card: any;
  cardNumber: any;
  cardCvc: any;
  cardExpiry: any;

  cardHandler = this.onChange.bind(this);
  error: string;

  customer: CustomerInterface;
  payment: PaymentInterface;

  submitted = false;

  countries = ['United States', 'Canada'];

  // tslint:disable-next-line:max-line-length
  USstates = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  // tslint:disable-next-line:max-line-length
  canadaStates = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon Territory'];

  constructor(private customerService: CustomerService,
              private router: Router,
              private cd: ChangeDetectorRef,
              private paymentService: PaymentService) { }

  goBack(link) {
    this.router.navigate([link]);
  }

  ngOnInit() {
    this.customerService.customerInfo$.subscribe(customer => this.customer = customer);
    this.paymentService.paymentDetails$.subscribe(payment => this.payment = payment);

    this.cardNumber = elements.create('cardNumber', {placeholder: 'Credit card number'});
    this.cardNumber.mount('#card-number');

    this.cardCvc = elements.create('cardCvc');
    this.cardCvc.mount('#card-cvc');

    this.cardExpiry = elements.create('cardExpiry');
    this.cardExpiry.mount('#card-expiry');

    this.cardNumber.addEventListener('change', this.cardHandler);
    this.cardCvc.addEventListener('change', this.cardHandler);
    this.cardExpiry.addEventListener('change', this.cardHandler);

    const $inputs = $('#mainForm :input');
      $.each($inputs, function (index, val) {
        $(val).change(() => {
          if ($(val).hasClass('ng-valid')) {
            $(val).next('.invalid-feedback').hide();
        }
        });
      });
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
    const { token, error } = await stripe.createToken(this.cardNumber);

    if (error) {
      console.log('Something is wrong:', error);
    } else {
      console.log('Success!', token);
      // ...send the token to the your backend to process the charge
    }
  }

  checkFormValidation () {
    if ($('#mainForm').hasClass('ng-invalid')) {
      const $inputs = $('#mainForm :input');
      $.each($inputs, function (index, val) {
        if ($(val).hasClass('ng-invalid')) {
          $(val).next('.invalid-feedback').show();
          $(val).removeClass('ng-pristine');
        }
      });
    } else {
      this.submitted = true;
    }
  }

  addBillingAddress() {
    this.paymentService.addPaymentDetails(this.payment);
  }

  submitForms(checkout) {
    this.addBillingAddress();
    this.onSubmit(checkout);
  }

}
