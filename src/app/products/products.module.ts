import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { OrderComponent } from './pages/order/order.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { canFlyPipe } from './pipes/can-fly.pipe';
import { SortByPipe } from './pipes/sortBy.pipe';

@NgModule({
  declarations: [
    BasicsPageComponent,
    UncommonPageComponent,
    NumbersPageComponent,
    OrderComponent,
    //pipes
    ToggleCasePipe,
    canFlyPipe,
    SortByPipe
  ],
  imports: [CommonModule, ProductsRoutingModule, PrimeNgModule],
})
export class ProductsModule {}
