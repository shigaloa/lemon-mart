import { Component, OnInit } from '@angular/core';

@Component({
  styles: [`
    div[fxLayout] {margin-top: 32px;}
` ],
  template: `
    <div fxLayout="column" fxLayoutAlign="center center">
      <span class="mat-display-2">Hello, Lemonite!</span>
      <button mat-raised-button color="primary" routerLink="/manager">Login as Manager</button>
    </div>
  `
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
