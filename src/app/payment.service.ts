import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { PaymentInterface } from './paymentInterface';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }

  private _paymentDetails = new BehaviorSubject<PaymentInterface>({
    cardHolderName: ''
  });

  paymentDetails$ = this._paymentDetails.asObservable();

  addPaymentDetails(details) {
    this._paymentDetails = new BehaviorSubject<PaymentInterface> (details);
  }
}
