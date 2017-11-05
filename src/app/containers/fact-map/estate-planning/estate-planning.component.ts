import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import * as estateplanning from '@btas/actions/estate-planning';

import { IPage } from '@btas/components/page/page';
import {
  IEstatePlanning,
} from '@btas/models/estate-planning';
import { IDataModel } from '@btas/models/base';

import {
  getEstatePlannings,
  getEstatePlanningExcludedMap,
  getEstatePlanningsLoadingFlag
} from '@btas/reducers';

import {
  ESTATEPLANNING_WILL_DEF,
  ESTATEPLANNING_DEATHNOMINATION_DEF,
  ESTATEPLANNING_POWERSOFATTORNEY_DEF
} from '@data/estate-planning.reference';
import { IGroupPanelItem } from '@btas/components/group-panel/group-panel-item';

import { BaseContainerComponent } from '@btas/containers/base-container.component';


@Component({
  selector: 'btas-estate-planning',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './estate-planning.component.pug'
})
export class EstatePlanningComponent extends BaseContainerComponent {

  public pageModel: IPage = <IPage> {
    title: 'Estate Planning',
    subtitle: 'Let\'s find about more of your Planning.'
  };

  public activeOnly: boolean = false;

  public afterViewInit = false;

  public estatePlanningTypesMap: Map<string, IGroupPanelItem> = new Map([
    ['will', ESTATEPLANNING_WILL_DEF],
    ['powerOfAttorney', ESTATEPLANNING_POWERSOFATTORNEY_DEF],
    ['deathNomination', ESTATEPLANNING_DEATHNOMINATION_DEF]
  ]);

  public estatePlannings$: Observable<IEstatePlanning>;
  public estatePlanningsLoading$: Observable<boolean>;
  public estatePlanningsExcludedMap$: Observable<{ [key: string]: boolean }>;

  public onContentChange(type: string, newValue: IDataModel) {
    this.store.dispatch(new estateplanning.UpdateEstatePlanningsAction({ type, newValue }));
  }

  public onAddEstatePlannings(estatePlanningType: string) {
    this.store.dispatch(new estateplanning.AddEstatePlanningsAction(estatePlanningType));
  }

  public onDeleteEstatePlannings(type: string, id: string) {
    console.log(type);
    this.store.dispatch(new estateplanning.DeleteEstatePlanningsAction({
      type, id
    }));
  }

  public onToggleEstatePlannings(type: string, included: boolean) {
    const excluded = !included;
    this.store.dispatch(new estateplanning.SetEstatePlanningsExcludedAction({
      type, excluded
    }));
  }

  public onToggleActiveOnly(activeOnly: boolean) {
    this.activeOnly = activeOnly;
  }

  public onNavigateAway(): void {
    this.store.dispatch(new estateplanning.SyncEstatePlannings());
  }

  protected onInit() {
    this.estatePlannings$ = this.store.select(getEstatePlannings);
    this.estatePlanningsLoading$ = this.store.select(getEstatePlanningsLoadingFlag);
    this.estatePlanningsExcludedMap$ = this.store.select(getEstatePlanningExcludedMap);
  }

  protected fetchData(): Array<Observable<any>> {
    this.store.dispatch(new estateplanning.FetchEstatePlanningsAction());

    return [
      this.estatePlanningsLoading$
    ];
  }

}
