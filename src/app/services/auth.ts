import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '@btas/reducers';
import { getState } from '@btas/reducers/utils';


@Injectable()
export class AuthService {

  public returnUrl: string;

  constructor(
    private store: Store<fromRoot.State>
  ) {}

  get isLoggedIn(): boolean {
    return !!getState(this.store).client.profile;
  }

}
