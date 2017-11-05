import 'rxjs/add/operator/take';

import { Store } from '@ngrx/store';
import { State } from '.';


export function getState(store: Store<State>): State {
  let state: State;
  store.take(1).subscribe(s => state = s);
  return state;
}
