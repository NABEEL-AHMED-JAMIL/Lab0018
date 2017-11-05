import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '@btas/reducers';

@Component({
  selector: 'btas-my-advice',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'my-advice.component.pug'
})
export class MyAdviceComponent {
  constructor(private store: Store<fromRoot.State>) {}
}
