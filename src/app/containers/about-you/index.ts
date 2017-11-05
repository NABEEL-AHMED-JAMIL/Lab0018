import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AboutYouComponent } from './about-you.component';
import { ComponentsModule } from '@btas/components';


const modules = [
  AboutYouComponent
];


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ComponentsModule
  ],
  declarations: modules,
  exports: modules
})
export class AboutYouModule {}
