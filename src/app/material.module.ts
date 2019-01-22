import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, 
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule, 
    MatToolbarModule,
    MatIconModule
  ],
  declarations: []
})
export class MaterialModule { }
