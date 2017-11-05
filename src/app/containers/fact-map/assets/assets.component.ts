import { Component, ChangeDetectionStrategy } from '@angular/core';

import * as asset from '@btas/actions/asset';

import { IPage } from '@btas/components/page/page';
import { IDataModel } from '@btas/models/base';
import { IAsset } from '@btas/models/asset';
import { Observable } from 'rxjs';

import {
  getAssets,
  getAssetTypesExcludedMap,
  getAssetsLoadingFlag
} from '@btas/reducers';

import {
  ASSET_LIFESTYLE_DEF,
  ASSET_CASHANDFIXEDINTEREST_DEF,
  ASSET_SHARESMANAGEDFUNDS_DEF,
  ASSET_INVESTMENTPROPERTY_DEF,
  ASSET_BUSINESS_DEF,
  ASSET_OTHER_DEF
} from '@data/asset.reference';
import { IGroupPanelItem } from '@btas/components/group-panel/group-panel-item';

import { BaseContainerComponent } from '@btas/containers/base-container.component';


@Component({
  selector: 'btas-asset',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './assets.component.pug'
})
export class AssetsComponent extends BaseContainerComponent {

  public pageModel: IPage = <IPage> {
    title: 'Assets',
    subtitle: `Let's find out more of your assets`
  };

  public activeOnly: boolean = false;

  public assetTypesMap: Map<string, IGroupPanelItem> = new Map([
    ['lifeStyles', ASSET_LIFESTYLE_DEF],
    ['cashAndFixedInterests', ASSET_CASHANDFIXEDINTEREST_DEF],
    ['investmentProperties', ASSET_INVESTMENTPROPERTY_DEF],
    ['sharesAndManagedFunds', ASSET_SHARESMANAGEDFUNDS_DEF],
    ['business', ASSET_BUSINESS_DEF],
    ['other', ASSET_OTHER_DEF]
  ]);

  public assets$: Observable<IAsset>;
  public assetsLoading$: Observable<boolean>;
  public assetTypesExcludedMap$: Observable<{ [key: string]: boolean }>;

  public onInvestmentPropertyChanged(value: IGroupPanelItem) {
  }

  public onSharesAndManagedFundsChanged(value: IGroupPanelItem) {
  }

  public onAddAsset(assetType: string) {
    this.store.dispatch(new asset.AddAssetAction(assetType));
  }

  public onDeleteAsset(type: string, id: string) {
    this.store.dispatch(new asset.DeleteAssetAction({
      type, id
    }));
  }

  public onToggleAsset(type: string, included: boolean) {
    const excluded = !included;
    this.store.dispatch(new asset.SetAssetTypeExcludedAction({
      type, excluded
    }));
  }

  public onToggleActiveOnly(activeOnly: boolean) {
    this.activeOnly = activeOnly;
  }

  public onNavigateAway(): void {
    this.store.dispatch(new asset.SyncAssets());
  }

  public onAssetChange(type: string, newValue: IDataModel) {
    this.store.dispatch(new asset.UpdateAssetAction({
      type,
      newValue
    }));
  }

  protected onInit() {
    this.assets$ = this.store.select(getAssets);
    this.assetsLoading$ = this.store.select(getAssetsLoadingFlag);
    this.assetTypesExcludedMap$ = this.store.select(getAssetTypesExcludedMap);
  }

  protected fetchData(): Array<Observable<any>> {
    this.store.dispatch(new asset.FetchAssetsAction());
    return [
      this.assetsLoading$
    ];
  }
}
