import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatTooltipModule } from '@angular/material/tooltip';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ManagerComponent } from './manager.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ManagerRoutingModule,
    FlexLayoutModule,
    MatTooltipModule
  ],
  declarations: [ManagerHomeComponent, ManagerComponent, UserManagementComponent, ReceiptLookupComponent]
})
export class ManagerModule { }
