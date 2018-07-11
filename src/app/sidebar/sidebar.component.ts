import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NOTES } from '../notes';
import { CustomerInterface } from '../customer-info';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  public products = [];

  notes = NOTES;

  customer: CustomerInterface;

  constructor(private productService: ProductService, private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.customerInfo$.subscribe(customer => this.customer = customer);

    this.productService.getProducts()
        .subscribe(data => this.products = data);

    $(window).resize(function () {
      if ($(window).width() <= 992) {
        $('#sidebar').addClass('collapse');
      } else {
        $('#sidebar').removeClass('collapse');
      }
    });
  }
}
