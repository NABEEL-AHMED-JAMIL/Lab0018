// Angular 2 Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// NgRx Modules
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// functional local modules
import { routes } from './routes';
import { reducer } from './reducers';

// component modules
import { AppComponent } from './containers/app.component';
import { ComponentsModule } from './components';
import { ContainersModule } from './containers';

// Service modules
import { ProvisioClientService } from './services/client.provisio';
import { ProvisioEstatePlanningService } from './services/estate-planning.provisio';
import { ProvisioAssetService } from './services/asset.provisio';
import { ProvisioLiabilitiesService } from './services/liabilities.provisio';
import { ProvisioSuperPensionsService } from './services/super-pensions.provisio';
import { ProvisioSocialSecurityService } from './services/social-security.provisio';
import { ProvisioRedundancyService } from './services/redundancy.provisio';
import { ProvisioInvestmentRiskProfileService } from './services/risk-profile.provisio';
import { BreadcrumbService } from './services/breadcrumb';
import { PlaygroundService } from './services/playground';
import { CurrencyCodesService } from './services/currency-codes';
import { ReferenceService } from './services/reference';
import { AuthGuardService } from './services/auth-guard';
import { AuthService } from './services/auth';
import { ProvisioPersonalInsurancePoliciesService } from './services/personal-insurance.provisio';

// Effects modules
import { ClientEffects } from './effects/client';
import { EstatePlanningEffects } from './effects/estate-planning';
import { AssetEffects } from './effects/asset';
import { LiabilitiesEffects } from './effects/liabilities';
import { SuperPensionsEffects } from './effects/super-pensions';
import { SocialSecurityEffects } from './effects/social-security';
import { RedundancyEffects } from './effects/redundancy';
import { InvestmentRiskProfileEffects } from './effects/risk-profile';
import { PlaygroundEffects } from './effects/playground';
import { PersonalInsuranceEffects } from './effects/personal-insurance';

// addons
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { CookieModule } from 'ngx-cookie';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    StoreModule.provideStore(reducer),
    ComponentsModule,
    ContainersModule,

    EffectsModule.run(ClientEffects),
    EffectsModule.run(PlaygroundEffects),
    EffectsModule.run(EstatePlanningEffects),
    EffectsModule.run(AssetEffects),
    EffectsModule.run(LiabilitiesEffects),
    EffectsModule.run(SuperPensionsEffects),
    EffectsModule.run(SocialSecurityEffects),
    EffectsModule.run(RedundancyEffects),
    EffectsModule.run(InvestmentRiskProfileEffects),
    EffectsModule.run(PersonalInsuranceEffects),

    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),

    SimpleNotificationsModule.forRoot(),
    CookieModule.forRoot(),
  ],

  declarations: [
    AppComponent,
  ],

  providers: [
    ProvisioClientService,
    ProvisioEstatePlanningService,
    ProvisioAssetService,
    ProvisioLiabilitiesService,
    ProvisioSuperPensionsService,
    ProvisioSocialSecurityService,
    ProvisioRedundancyService,
    ProvisioInvestmentRiskProfileService,
    BreadcrumbService,
    PlaygroundService,
    CurrencyCodesService,
    ReferenceService,
    AuthService,
    AuthGuardService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    ProvisioPersonalInsurancePoliciesService
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
