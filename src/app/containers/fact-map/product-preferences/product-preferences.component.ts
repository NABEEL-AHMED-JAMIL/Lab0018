import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '@btas/reducers';
import { IPage } from '@btas/components/page/page';
import { IPanel } from '@btas/components/panel/panel';

@Component({
  selector: 'btas-product-preferences',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-preferences.component.pug'
})
export class ProductPreferencesComponent implements OnInit {

  public pageModel: IPage;
  public panelModel: IPanel;

  constructor(private store: Store<fromRoot.State>) {}

  public ngOnInit(): void {
    this.pageModel = <IPage> {
      title: 'Product Preferences'
    };

    this.panelModel = <IPanel> {
      title: ''
    };
  }

}
