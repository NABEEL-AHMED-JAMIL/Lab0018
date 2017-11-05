import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import * as superPensions from '@btas/actions/super-pensions';

import { IPage } from '@btas/components/page/page';
import {
  ISuperPensions,
} from '@btas/models/super-pensions';

import {
  getSuperPensions,
  getSuperPensionsExcludedMap,
  getSuperPensionsLoadingFlag
} from '@btas/reducers';

import {
  SUPERPENSIONS_SUPERANNUATION_DEF,
  SUPERPENSIONS_PENSION_DEF,
  SUPERPENSIONS_ANNUITIES_DEF,
  SUPERPENSIONS_CONTRIBUTIONSHISTORY_DEF
} from '@data/super-pensions.reference';
import { IGroupPanelItem } from '@btas/components/group-panel/group-panel-item';

import { BaseContainerComponent } from '@btas/containers/base-container.component';


@Component({
  selector: 'btas-superannuation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './superannuation.component.pug'
})
export class SuperannuationComponent extends BaseContainerComponent {

  public pageModel: IPage = <IPage> {
    title: 'Super & Pensions',
    subtitle: `Let's find out more about your pensions`
  };

  public activeOnly: boolean = false;

  public afterViewInit = false;

  public superTypesMap: Map<string, IGroupPanelItem> = new Map([
    ['superannuations', SUPERPENSIONS_SUPERANNUATION_DEF],
    ['contributionHistories', SUPERPENSIONS_CONTRIBUTIONSHISTORY_DEF],
    ['pensions', SUPERPENSIONS_PENSION_DEF],
    ['annuities', SUPERPENSIONS_ANNUITIES_DEF]
  ]);

  // change this to getter if performance becomes a concern
  public superPensions$: Observable<ISuperPensions>;
  public superPensionsLoading$: Observable<boolean>;
  public superPensionsExcludedMap$: Observable<{ [key: string]: boolean }>;

  public onContentChange(value: any) {
    this.store.dispatch(new superPensions.UpdateSuperPensionAction(value));
  }

  public onAddSuperPension(superType: string) {
    this.store.dispatch(new superPensions.AddSuperPensionAction(superType));
  }

  public onDeleteSuperPension(type: string, id: string) {
    this.store.dispatch(new superPensions.DeleteSuperPensionAction({
      type, id
    }));
  }

  public onToggleSuperannuation(type: string, included: boolean) {
    const excluded = !included;
    this.store.dispatch(new superPensions.SetSuperTypeExcludedAction({
      type, excluded
    }));
  }

  public onToggleActiveOnly(activeOnly: boolean) {
    this.activeOnly = activeOnly;
  }

  public onNavigateAway(): void {
    this.store.dispatch(new superPensions.SyncSuperPensions());
  }

  protected onInit() {
    this.superPensions$ = this.store.select(getSuperPensions);
    this.superPensionsLoading$ = this.store.select(getSuperPensionsLoadingFlag);
    this.superPensionsExcludedMap$ = this.store.select(getSuperPensionsExcludedMap);
  }

  protected fetchData(): Array<Observable<any>> {
    this.store.dispatch(new superPensions.FetchSuperPensionsAction());

    return [
      this.superPensionsLoading$
    ];
  }

}
