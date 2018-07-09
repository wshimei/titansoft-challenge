import { Injectable } from '@angular/core';
import { CustomerInterface, CustomerInfo } from './customer-info';

import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private _customerInfo = new BehaviorSubject<CustomerInterface>({
    // tslint:disable-next-line:max-line-length
    id: 1, email: '', subscribe: false, firstName: '', lastName: '', company: '', address: '', apartment: '', city: '', country: '', state: '', zipcode: '', phone: '', saveInfo: false
  });

  customerInfo$ = this._customerInfo.asObservable();

  // private _id = new BehaviorSubject<number>(1);
  // private _email = new BehaviorSubject<string>('');
  // private _subscribe = new BehaviorSubject<boolean>(false);
  // private _firstName = new BehaviorSubject<string>('');
  // private _lastName = new BehaviorSubject<string>('');
  // private _company = new BehaviorSubject<string>('');
  // private _address = new BehaviorSubject<string>('');
  // private _apartment = new BehaviorSubject<string>('');
  // private _city = new BehaviorSubject<string>('');
  // private _country = new BehaviorSubject<string>('');
  // private _state = new BehaviorSubject<string>('');
  // private _zipcode = new BehaviorSubject<string>('');
  // private _phone = new BehaviorSubject<string>('');
  // private _saveInfo = new BehaviorSubject<boolean>(false);

  // customerId = this._id.asObservable();
  // customerEmail = this._email.asObservable();
  // customerSubscribe = this._subscribe.asObservable();
  // customerFirstName = this._firstName.asObservable();
  // customerLastName = this._lastName.asObservable();
  // customerCompany = this._company.asObservable();
  // customerAddress = this._address.asObservable();
  // customerApartment = this._apartment.asObservable();
  // customerCity = this._city.asObservable();
  // customerCountry = this._country.asObservable();
  // customerState = this._state.asObservable();
  // customerZipcode = this._zipcode.asObservable();
  // customerPhone = this._phone.asObservable();
  // customerSaveInfo = this._saveInfo.asObservable();

  constructor() { }

  addCustomer(newCustomer) {
    this._customerInfo = new BehaviorSubject<CustomerInterface> (newCustomer);
    console.log(this._customerInfo);
    
  }
}
