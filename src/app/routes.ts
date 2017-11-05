import { Routes } from '@angular/router';
import { AboutYouComponent } from '@btas/containers/about-you/about-you.component';
import { StrategiesComponent } from '@btas/containers/strategies.component';
import { MyAdviceComponent } from '@btas/containers/my-advice.component';
import { PlaygroundComponent } from '@btas/containers/playground/playground.component';
import { WelcomeComponent } from '@btas/containers/welcome.component';

import { routes as aboutYouRoutes } from './about-you.routes';

import { AuthGuardService } from '@btas/services/auth-guard';


// https://github.com/rangle/angular-2-aot-sandbox#func-in-routes-top
// please check the status page above, if func-in-routes is supported by AoT,
// then we could use L function here to provide translatables.


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/about-you',
    pathMatch: 'full'
  },
  {
    path: 'about-you',
    component: AboutYouComponent,
    children: aboutYouRoutes,
    canActivate: [AuthGuardService]
  },
  {
    path: 'strategies',
    component: StrategiesComponent,
  },
  {
    path: 'my-advice',
    component: MyAdviceComponent,
  },
  {
    path: 'playground',
    component: PlaygroundComponent,
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
  }
];
