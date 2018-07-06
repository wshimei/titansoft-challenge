import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NOTES } from '../notes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  public products = [];

  notes = NOTES;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
        .subscribe(data => this.products = data);
  }

}
