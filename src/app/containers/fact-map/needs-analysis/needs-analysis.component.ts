import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '@btas/reducers';
import { IPage } from '@btas/components/page/page';
import { IPanel } from '@btas/components/panel/panel';

@Component({
  selector: 'btas-needs-analysis',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './needs-analysis.component.pug'
})
export class NeedsAnalysisComponent implements OnInit {

  public pageModel: IPage;
  public panelModel: IPanel;

  constructor(private store: Store<fromRoot.State>) {}

  public ngOnInit(): void {
    this.pageModel = <IPage> {
      title: 'Insurance Need Analysis',
      subtitle: 'Let\'s find out more ' +
        'about your insurance needs so you can be coverd by the unexpected.'
    };

    this.panelModel = <IPanel> {
      title: ''
    };
  }

}
