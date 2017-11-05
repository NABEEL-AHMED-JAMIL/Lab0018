import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '@btas/reducers';

@Component({
  selector: 'btas-strategies',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './strategies.component.pug'
})
export class StrategiesComponent {
  constructor(private store: Store<fromRoot.State>) {}
}
