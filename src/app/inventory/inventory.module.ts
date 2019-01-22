import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatTooltipModule } from '@angular/material/tooltip';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { StockEntryComponent } from './stock-entry/stock-entry.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { InventoryHomeComponent } from './inventory-home/inventory-home.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    MatTooltipModule,
    InventoryRoutingModule
  ],
  declarations: [InventoryComponent, StockEntryComponent, CategoriesComponent, ProductsComponent, InventoryHomeComponent]
})
export class InventoryModule { }
