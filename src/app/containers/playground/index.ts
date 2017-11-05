import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PlaygroundComponent } from './playground.component';
import { ComponentsModule } from '@btas/components';

import { BsDropdownModule } from 'ngx-bootstrap';

const modules = [
  PlaygroundComponent
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ComponentsModule,
    BsDropdownModule.forRoot(),
  ],
  declarations: modules,
  exports: modules
})
export class PlaygroundModule { }
