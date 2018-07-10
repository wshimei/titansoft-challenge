import { Injectable } from '@angular/core';
import { CustomerInterface, CustomerInfo } from './customer-info';

import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private _customerInfo = new BehaviorSubject<CustomerInterface>({
    // tslint:disable-next-line:max-line-length
    id: 1, email: '', subscribe: false, firstName: '', lastName: '', company: '', address: '', apartment: '', city: '', country: '', state: '', zipcode: '', phone: '', saveInfo: false, shippingMethod: ''
  });

  customerInfo$ = this._customerInfo.asObservable();

  constructor() { }

  addCustomer(newCustomer) {
    this._customerInfo = new BehaviorSubject<CustomerInterface> (newCustomer);
  }
}
