import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '@btas/reducers';
import { IPage } from '@btas/components/page/page';
import { IPanel } from '@btas/components/panel/panel';

@Component({
  selector: 'btas-cashflow',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cash-flow.component.pug'
})
export class CashFlowComponent implements OnInit {

  public pageModel: IPage;
  public panelModel: IPanel;

  constructor(private store: Store<fromRoot.State>) {}

  public ngOnInit(): void {
    this.pageModel = <IPage> {
      title: 'Cash Flow',
      subtitle: 'Let\'s find about more of your assets.'
    };

    this.panelModel = <IPanel> {
      title: ''
    };
  }

}
