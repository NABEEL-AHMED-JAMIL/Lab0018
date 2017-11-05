import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { GoalsComponent } from './goals/goals.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { RiskProfileComponent } from './risk-profile/risk-profile.component';
import { AssetsComponent } from './assets/assets.component';
import { CashFlowComponent } from './cashflow/cash-flow.component';
import { LiabilitiesComponent } from './liabilities/liabilities.component';
import { SuperannuationComponent } from './superannuation/superannuation.component';
import { PersonalInsuranceComponent } from './personal-insurance/personal-insurance.component';
import { NeedsAnalysisComponent } from './needs-analysis/needs-analysis.component';
import { ProductPreferencesComponent } from './product-preferences/product-preferences.component';
import { RedundancyComponent } from './redundancy-etp/redundancy-etp.component';
import { EstatePlanningComponent } from './estate-planning/estate-planning.component';
import { SocialSecurityComponent } from './social-security/social-security.component';
import { ComponentsModule } from '@btas/components';


const modules = [
  GoalsComponent,
  RiskProfileComponent,
  PersonalDetailsComponent,
  AssetsComponent,
  CashFlowComponent,
  LiabilitiesComponent,
  SuperannuationComponent,
  PersonalInsuranceComponent,
  NeedsAnalysisComponent,
  ProductPreferencesComponent,
  RedundancyComponent,
  EstatePlanningComponent,
  SocialSecurityComponent
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
export class FactMapModule {}
