import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventoryComponent } from './inventory.component';
import { InventoryHomeComponent } from '../inventory/inventory-home/inventory-home.component';
import { CategoriesComponent } from '../inventory/categories/categories.component';
import { ProductsComponent } from '../inventory/products/products.component';
import { StockEntryComponent } from '../inventory/stock-entry/stock-entry.component'

const routes: Routes = [
  {
    path: '', component: InventoryComponent,
    children: [
        { path: '', redirectTo: '/inventory/home', pathMatch: 'full' },
        { path: 'home', component: InventoryHomeComponent }
        { path: 'categories', component: CategoriesComponent },
        { path: 'products', component: ProductsComponent },
        { path: 'stockEntry', component: StockEntryComponent }
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
