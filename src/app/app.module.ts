import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RouteRoutingModule, routingComponents } from '../app/route/route-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { CustomerService } from './customer.service';
import { PaymentService } from './payment.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
    MainHeaderComponent,
    MainFooterComponent,
    routingComponents,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CustomerService,
    PaymentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
