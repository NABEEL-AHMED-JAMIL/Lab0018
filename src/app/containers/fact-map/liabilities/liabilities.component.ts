import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import * as liabilities from '@btas/actions/liabilities';

import { IPage } from '@btas/components/page/page';
import {
  ILiabilities,
} from '@btas/models/liabilities';
import { IDataModel } from '@btas/models/base';

import {
  getLiabilities,
  getLiabilitiesExcludedMap,
  getLiabilitiesLoadingFlag
} from '@btas/reducers';

import {
  LIABILITIES_HOMEMORTGAGES_DEF,
  LIABILITIES_PERSONALLOANS_DEF,
  LIABILITIES_CREDITCARDS_DEF,
  LIABILITIES_INVESTMENTLOANS_DEF,
  LIABILITIES_BUSINESSLOANS_DEF,
  LIABILITIES_OTHERLOANS_DEF
} from '@data/liabilities.reference';
import { IGroupPanelItem } from '@btas/components/group-panel/group-panel-item';

import { BaseContainerComponent } from '@btas/containers/base-container.component';


@Component({
  selector: 'btas-liabilities',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './liabilities.component.pug'
})
export class LiabilitiesComponent extends BaseContainerComponent {

  public pageModel: IPage = <IPage> {
    title: 'Liabilities',
    subtitle: `Let's find out more about your liabilities`
  };

  public activeOnly: boolean = false;

  public afterViewInit = false;

  public liabilityTypesMap: Map<string, IGroupPanelItem> = new Map([
    ['homeMortgages', LIABILITIES_HOMEMORTGAGES_DEF],
    ['personalLoans', LIABILITIES_PERSONALLOANS_DEF],
    ['creditCards', LIABILITIES_CREDITCARDS_DEF],
    ['investmentLoans', LIABILITIES_INVESTMENTLOANS_DEF],
    ['businessLoans', LIABILITIES_BUSINESSLOANS_DEF],
    ['otherLoans', LIABILITIES_OTHERLOANS_DEF]
  ]);

  // change this to getter if performance becomes a concern
  public liabilities$: Observable<ILiabilities>;
  public liabilitiesLoading$: Observable<boolean>;
  public liabilitiesExcludedMap$: Observable<{ [key: string]: boolean }>;

  public onContentChange(type: string, newValue: IDataModel) {
    this.store.dispatch(new liabilities.UpdateLiabilitiesAction({ type, newValue }));
  }

  public onAddLiabilities(superType: string) {
    this.store.dispatch(new liabilities.AddLiabilitiesAction(superType));
  }

  public onDeleteLiabilities(type: string, id: string) {
    console.log(type);
    this.store.dispatch(new liabilities.DeleteLiabilitiesAction({
      type, id
    }));
  }

  public onToggleLiabilities(type: string, included: boolean) {
    const excluded = !included;
    this.store.dispatch(new liabilities.SetLiabilitiesExcludedAction({
      type, excluded
    }));
  }

  public onToggleActiveOnly(activeOnly: boolean) {
    this.activeOnly = activeOnly;
  }

  public onNavigateAway(): void {
    this.store.dispatch(new liabilities.SyncLiabilities());
  }

  protected onInit() {
    this.liabilities$ = this.store.select(getLiabilities);
    this.liabilitiesLoading$ = this.store.select(getLiabilitiesLoadingFlag);
    this.liabilitiesExcludedMap$ = this.store.select(getLiabilitiesExcludedMap);
  }

  protected fetchData(): Array<Observable<any>> {
    this.store.dispatch(new liabilities.FetchLiabilitiesAction());

    return [
      this.liabilitiesLoading$
    ];
  }

}
