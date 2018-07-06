import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NOTES } from '../notes';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  public products = [];

  notes = NOTES;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(data => this.products = data);

    $(window).resize(function () {
      if ($(window).width() > 1000) {
        $('#sidebar').removeClass('collapse');
      } else {
        $('#sidebar').addClass('collapse');
      }
    });
  }



}
