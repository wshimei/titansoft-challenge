import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  product: Product = {
    id: 1,
    name: 'Mini X',
    imageURL: '//cdn.shopify.com/s/files/1/0325/7933/products/boosted-stealth_small.jpg?653946253001957546',
    price: 999,
    shipping: 'NA / Ships in about 4 weeks'
  };

  constructor() { }

  ngOnInit() {
  }

}
