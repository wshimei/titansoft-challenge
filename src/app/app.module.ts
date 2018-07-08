import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RouteRoutingModule, routingComponents } from '../app/route/route-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
    MainHeaderComponent,
    MainFooterComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouteRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
