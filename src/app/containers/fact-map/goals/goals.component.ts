import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '@btas/reducers';
import { IPage } from '@btas/components/page/page';
import { IPanel } from '@btas/components/panel/panel';

@Component({
  selector: 'btas-goals',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './goals.component.pug'
})
export class GoalsComponent implements OnInit {

  public pageModel: IPage;
  public panelModel: IPanel;

  constructor(private store: Store<fromRoot.State>) {}

  public ngOnInit(): void {
    this.pageModel = <IPage> {
      title: 'Goals',
      subtitle: 'Tell us more about your goals and priorities.'
    };

    this.panelModel = <IPanel> {
      title: ''
    };
  }

}
