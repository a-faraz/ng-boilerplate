import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavBarComponent } from './nav-bar';


const components = [
  NavBarComponent
];

@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components
})
export class ComponentsModule {}
