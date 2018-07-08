import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainBodyComponent } from './../main-body/main-body.component';
import { ShippingMethodComponent } from '../shipping-method/shipping-method.component';
import { PaymentMethodComponent } from '../payment-method/payment-method.component';

const routes: Routes = [
  { path: '', redirectTo: '/customer-information', pathMatch: 'full'},
  { path: 'customer-information', component: MainBodyComponent },
  { path: 'shipping-method', component: ShippingMethodComponent },
  { path: 'payment-method', component: PaymentMethodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RouteRoutingModule { }

export const routingComponents = [MainBodyComponent, ShippingMethodComponent, PaymentMethodComponent ];
