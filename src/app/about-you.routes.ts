import {
  Routes
} from '@angular/router';
import {
  GoalsComponent
} from './containers/fact-map/goals/goals.component';
import {
  PersonalDetailsComponent
} from './containers/fact-map/personal-details/personal-details.component';
import {
  RiskProfileComponent
} from './containers/fact-map/risk-profile/risk-profile.component';
import {
 AssetsComponent
} from './containers/fact-map/assets/assets.component';
import {
  CashFlowComponent
} from './containers/fact-map/cashflow/cash-flow.component';
import {
  LiabilitiesComponent
} from './containers/fact-map/liabilities/liabilities.component';
import {
  SuperannuationComponent
} from './containers/fact-map/superannuation/superannuation.component';
import {
  PersonalInsuranceComponent
} from './containers/fact-map/personal-insurance/personal-insurance.component';
import {
  NeedsAnalysisComponent
} from './containers/fact-map/needs-analysis/needs-analysis.component';
import {
  ProductPreferencesComponent
} from './containers/fact-map/product-preferences/product-preferences.component';
import {
  RedundancyComponent
} from './containers/fact-map/redundancy-etp/redundancy-etp.component';
import {
  EstatePlanningComponent
} from './containers/fact-map/estate-planning/estate-planning.component';
import {
  SocialSecurityComponent
} from './containers/fact-map/social-security/social-security.component';


export const routes: Routes = [
  {
    path: 'goals',
    component: GoalsComponent,
    outlet: 'about-you'
  },
  {
    path: 'personal-details',
    component: PersonalDetailsComponent,
    outlet: 'about-you'
  },
  {
    path: 'risk-profile',
    component: RiskProfileComponent,
    outlet: 'about-you'
  },
  {
    path: 'assets',
    component: AssetsComponent,
    outlet: 'about-you'
  },
  {
    path: 'cash-flow',
    component: CashFlowComponent,
    outlet: 'about-you'
  },
  {
    path: 'libilities',
    component: LiabilitiesComponent,
    outlet: 'about-you'
  },
  {
    path: 'superannuation',
    component: SuperannuationComponent,
    outlet: 'about-you'
  },
  {
    path: 'personal-insurance',
    component: PersonalInsuranceComponent,
    outlet: 'about-you'
  },
  {
    path: 'needs-analysis',
    component: NeedsAnalysisComponent,
    outlet: 'about-you'
  },
  {
    path: 'product-preferences',
    component: ProductPreferencesComponent,
    outlet: 'about-you'
  },
  {
    path: 'redundancy-etp',
    component: RedundancyComponent,
    outlet: 'about-you'
  },
  {
    path: 'estate-planning',
    component: EstatePlanningComponent,
    outlet: 'about-you'
  },
  {
    path: 'social-security',
    component: SocialSecurityComponent,
    outlet: 'about-you'
  }
];
