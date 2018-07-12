import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { PaymentInterface } from './paymentInterface';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }

  private _paymentDetails = new BehaviorSubject<PaymentInterface>({
    // tslint:disable-next-line:max-line-length
    cardHolderName: '', firstName: '', lastName: '', company: '', address: '', apartment: '', city: '', country: '', state: '', zipcode: '', phone: '' });

  paymentDetails$ = this._paymentDetails.asObservable();

  addPaymentDetails(details) {
    this._paymentDetails = new BehaviorSubject<PaymentInterface> (details);
  }
}
