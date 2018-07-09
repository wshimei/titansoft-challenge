import { Component, OnInit } from '@angular/core';
import { CustomerInfo } from '../customer-info';


declare var $: any;

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  customer = new CustomerInfo(1, '', false, '', '', '', '', '', '', '', '', '', '', false);

  countries = ['United States', 'Canada'];

  // tslint:disable-next-line:max-line-length
  USstates = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  // tslint:disable-next-line:max-line-length
  canadaStates = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon Territory'];


  submitted = false;

  checkFormValidation () {
    console.log($('#mainForm').hasClass('ng-invalid'));
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
      location.href = '/shipping-method';
    }
  }

  // remove when done
  get diagnostic() {return JSON.stringify(this.customer); }

  constructor() { }

  ngOnInit() {
    const $inputs = $('#mainForm :input');
      $.each($inputs, function (index, val) {
        $(val).change(() => {
          if ($(val).hasClass('ng-valid')) {
            $(val).next('.invalid-feedback').hide();
        }
        });
      });
  }

}
