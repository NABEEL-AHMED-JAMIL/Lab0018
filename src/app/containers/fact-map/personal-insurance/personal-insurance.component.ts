import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import * as personalInsurance from '@btas/actions/personal-insurance';

import { IPage } from '@btas/components/page/page';
import { BaseContainerComponent } from '@btas/containers/base-container.component';
import { IPersonalInsurance } from '@btas/models/personal-insurance';
import {
  getPersonalInsurance,
  getPersonalInsuranceExcludedMap,
  getPersonalInsuranceLoadingFlag
} from '@btas/reducers';

import { IGroupPanelItem } from '@btas/components/group-panel/group-panel-item';
import {
  LIFE_COVER_TYPE_DEF,
  TPD_COVER_TYPE_DEF, TRAUMA_COVER_TYPE_DEF,
  INCOME_PROTECTION_COVER_TYPE_DEF
} from '@data/personal-insurance.reference';


@Component({
  selector: 'btas-personal-insurance',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './personal-insurance.component.pug'
})
export class PersonalInsuranceComponent extends BaseContainerComponent {

  public pageModel: IPage = <IPage> {
    title: 'Personal Insurance',
      subtitle: 'Let\'s get to ' +
        'know each other so we can better serve you.'
  };

  public activeOnly: boolean = false;

  public afterViewInit = false;

  public personalInsuranceTypesMap: Map<string, IGroupPanelItem> = new Map([
    ['lifeCoverType', LIFE_COVER_TYPE_DEF],
    ['tpdCoverType', TPD_COVER_TYPE_DEF],
    ['traumaCoverType', TRAUMA_COVER_TYPE_DEF],
    ['incomeProtectionCoverType', INCOME_PROTECTION_COVER_TYPE_DEF]
  ]);

  // change this to getter if performance becomes a concern
  public personalInsurance$: Observable<IPersonalInsurance>;
  public personalInsuranceLoading$: Observable<boolean>;
  public personalInsuranceExcludedMap$: Observable<{ [key: string]: boolean }>;

  public onContentChange(type: string) {
   this.store.dispatch(new personalInsurance.UpdatePersonalInsuranceAction({ type }));
  }

  public onAddPersonalInsurance(personalInsuranceType: string) {
    this.store.dispatch(new personalInsurance.AddPersonalInsuranceAction(personalInsuranceType));
  }

  public onDeletePersonalInsurance(type: string, id: string) {
    this.store.dispatch(new personalInsurance.DeletePersonalInsuranceAction({
      type, id
    }));
  }

  public onTogglePersonalInsurance(type: string, included: boolean) {
    const excluded = !included;
    this.store.dispatch(new personalInsurance.SetPersonalInsuranceExcludedAction({
      type, excluded
    }));
  }

  public onToggleActiveOnly(activeOnly: boolean) {
    this.activeOnly = activeOnly;
  }

  public onNavigateAway(): void {
    this.store.dispatch(new personalInsurance.SyncPersonalInsurance());
  }

  protected onInit() {
    this.personalInsurance$ = this.store.select(getPersonalInsurance);
    this.personalInsuranceLoading$ = this.store.select(getPersonalInsuranceLoadingFlag);
    this.personalInsuranceExcludedMap$ = this.store.select(getPersonalInsuranceExcludedMap);
  }

  protected fetchData(): Array<Observable<any>> {
    this.store.dispatch(new personalInsurance.FetchPersonalInsuranceAction());

    return [
      this.personalInsuranceLoading$
    ];
  }

}
