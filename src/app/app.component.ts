import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nb-layout center>
      <nb-layout-header> <app-nav-bar></app-nav-bar> </nb-layout-header>
      <nb-layout-column>Layout Content</nb-layout-column>
    </nb-layout>
  `,
  styles: [
    `
      ::ng-deep nb-layout-header nav {
        display: flex;
        flex-direction: row-reverse;
      }
    `
  ]
})
export class AppComponent {}
