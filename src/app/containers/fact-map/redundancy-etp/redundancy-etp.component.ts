import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import * as redundancy from '@btas/actions/redundancy';

import { IPage } from '@btas/components/page/page';
import { IRedundancy } from '@btas/models/redundancy';
import { BaseContainerComponent } from '@btas/containers/base-container.component';
import {
  getRedundancies,
  getRedundanciesExcludedMap,
  getRedundanciesLoadingFlag
} from '@btas/reducers';
import { IGroupPanelItem } from '@btas/components/group-panel/group-panel-item';
import {
  REDUNDANCY_ETP_DEF
} from '@data/redundancy.reference';


@Component({
  selector: 'btas-redundancy-etp',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './redundancy-etp.component.pug'
})

export class RedundancyComponent extends BaseContainerComponent {

  public pageModel: IPage = <IPage> {
    title: 'Redundancy / ETP',
    subtitle: `Let's get to know each other so we can best serve you`
  };

  public afterViewInit = false;

   public redundancyTypesMap: Map<string, IGroupPanelItem> = new Map([
    ['redundancies', REDUNDANCY_ETP_DEF]
  ]);

  // change this to getter if performance becomes a concern
  public redundancies$: Observable<IRedundancy>;
  public redundanciesLoading$: Observable<boolean>;
  public redundanciesExcludedMap$: Observable<{ [key: string]: boolean }>;

  public onContentChange(type: string) {
    this.store.dispatch(new redundancy.UpdateRedundancyAction({ type }));
  }

  public onAddRedundancies(superType: string) {
    this.store.dispatch(new redundancy.AddRedundancyAction(superType));
  }

  public onDeleteRedundancies(type: string, id: string) {
     this.store.dispatch(new redundancy.DeleteRedundancyAction({
      type, id
    }));
  }

  public onToggleRedundancies(type: string, included: boolean) {
    const excluded = !included;
    this.store.dispatch(new redundancy.SetRedundancyTypeExcludedAction({
      type, excluded
    }));
  }

  public onNavigateAway(): void {
    this.store.dispatch(new redundancy.SyncRedundancies());
  }

  protected onInit() {
    this.redundancies$ = this.store.select(getRedundancies);
    this.redundanciesLoading$ = this.store.select(getRedundanciesLoadingFlag);
    this.redundanciesExcludedMap$ = this.store.select(getRedundanciesExcludedMap);
  }

  protected fetchData(): Array<Observable<any>> {
    this.store.dispatch(new redundancy.FetchRedundancyAction());

    return [
      this.redundanciesLoading$
    ];
  }

}
