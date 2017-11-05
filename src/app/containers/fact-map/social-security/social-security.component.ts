import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';
import { IPage } from '@btas/components/page/page';
import { FetchSocialSecurityAction, UpdateSocialSecurityAction, SyncSocialSecurityAction }
     from '@btas/actions/social-security';
import { ISocialSecurity } from '@btas/models/social-security';
import { getSocialSecurity } from '@btas/reducers';

import { SOCIAL_SECURITY_DEF } from '@btas/data/social-security.reference';
import { BaseContainerComponent } from '@btas/containers/base-container.component';
import { Action } from '@ngrx/store';
import { getLoaderState } from '@btas/reducers';


@Component({
  selector: 'btas-social-security',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './social-security.component.pug'
})
export class SocialSecurityComponent extends BaseContainerComponent {

  public pageModel: IPage = <IPage> {
      title: 'Social Security',
      summary: []
  };

  public centrelinkPanel = SOCIAL_SECURITY_DEF;

  public items$: Observable<ISocialSecurity[]> = this.store.select(getSocialSecurity).map(
      a => [a]
    );

  private loadingMap = new Map<Action, Observable<any>>();

  public onContentChange(formData: any): void {
    this.store.dispatch(new UpdateSocialSecurityAction(formData));
  }

  public onNavigateAway(): void {
    this.store.dispatch(new SyncSocialSecurityAction());
  }

  protected fetchData(): Array<Observable<any>> {
    return [ this.dispatchBlockingFetch(new FetchSocialSecurityAction()) ];
  }

  protected dispatchBlockingFetch(action: Action) {
    this.store.dispatch(action);
    let res = this.loadingMap.get(action);
    if (!res) {
      res = this.store.select(getLoaderState(action));
      this.loadingMap.set(action, res);
    }

    return res;
  }
}
