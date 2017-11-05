import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import * as riskProfile from '@btas/actions/risk-profile';

import { IPage } from '@btas/components/page/page';
import { IInvestmentRiskProfile } from '@btas/models/risk-profile';
import { IDataModel } from '@btas/models/base';

import {
  getInvestmentRiskProfile,
  getInvestmentRiskProfileExcludedMap,
  getInvestmentRiskProfileLoadingFlag
} from '@btas/reducers';

import {
  INVESTMENT_RISK_PROFILE_DEF
} from '@data/risk-profile.reference';
import { IGroupPanelItem } from '@btas/components/group-panel/group-panel-item';

import { BaseContainerComponent } from '@btas/containers/base-container.component';


@Component({
  selector: 'btas-risk-profile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './risk-profile.component.pug',
  styleUrls: ['./risk-profile.component.scss']
})
export class RiskProfileComponent extends BaseContainerComponent {

  public pageModel: IPage = <IPage> {
    title: 'Risk Profile',
    subtitle: `Create and model new strategies, then choose the most suitable one`
  };

  public afterViewInit = false;

  public riskProfileTypesMap: Map<string, IGroupPanelItem> = new Map([
    ['riskProfileResult', INVESTMENT_RISK_PROFILE_DEF],

  ]);

   // change this to getter if performance becomes a concern
  public riskProfile$: Observable<IInvestmentRiskProfile>;
  public riskProfileLoading$: Observable<boolean>;
  public riskProfileExcludedMap$: Observable<{ [key: string]: boolean }>;

  public onContentChange(type: string, newValue: IDataModel) {
    this.store.dispatch(new riskProfile.UpdateRiskProfileAction({type, newValue}));
  }

  public onAddRiskProfile(riskProfileType: string) {
    this.store.dispatch(new riskProfile.AddRiskProfileAction(riskProfileType));
  }

  public onDeleteRiskProfile(type: string, id: string) {
    this.store.dispatch(new riskProfile.DeleteRiskProfileAction({
      type, id
    }));
  }

  public onToggleRiskProfile(type: string, included: boolean) {
    const excluded = !included;
    this.store.dispatch(new riskProfile.SetRiskProfileTypeExcludedAction({
      type, excluded
    }));
  }


  public onNavigateAway(): void {
    this.store.dispatch(new riskProfile.SyncRiskProfile());
  }

  protected onInit() {
    this.riskProfile$ = this.store.select(getInvestmentRiskProfile);
    this.riskProfileLoading$ = this.store.select(getInvestmentRiskProfileLoadingFlag);
    this.riskProfileExcludedMap$ = this.store.select(getInvestmentRiskProfileExcludedMap);
  }

  protected fetchData(): Array<Observable<any>> {
    this.store.dispatch(new riskProfile.FetchRiskProfileAction());

    return [
      this.riskProfileLoading$
    ];
  }

}
