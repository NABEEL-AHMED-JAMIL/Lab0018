import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AboutYouModule } from './about-you';
import { ComponentsModule } from '@btas/components';
import { FactMapModule } from './fact-map';
import { PlaygroundModule } from './playground';

import { MyAdviceComponent } from './my-advice.component';
import { StrategiesComponent } from './strategies.component';
import { WelcomeComponent } from './welcome.component';
import { BaseContainerComponent } from './base-container.component';


const modules = [
  MyAdviceComponent,
  StrategiesComponent,
  WelcomeComponent,
  BaseContainerComponent
];


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ComponentsModule,
    AboutYouModule,
    FactMapModule,
    PlaygroundModule
  ],
  declarations: modules,
  exports: modules
})
export class ContainersModule {}
