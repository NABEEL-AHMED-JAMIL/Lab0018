import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import * as client from '@btas/actions/client';

import { IPage } from '@btas/components/page/page';
import {
  IClient,
  IClientKeyInfo,
  IClientOtherInfo,
  IClientContactInfo,
  IClientEmployment,
  IClientIdentification,
  IClientThirdParty,
} from '@btas/models/client';

import { IReferral } from '@btas/models/referral';
import { IDependent } from '@btas/models/dependent';
import { IDataModel } from '@btas/models/base';

import {
  getKeyInfos,
  getContactInfos,
  getOtherInfos,
  getDependents,
  getDependentsLoadingFlag,
  getEmployments,
  getIdentifications,
  getThirdParties,
  getReferrals,
  getReferralLoadingFlag
} from '@btas/reducers';

import {
  CLIENT_KEYINFO_DEF,
  CLIENT_OTHERINFO_DEF,
  CLIENT_CONTACTINFO_DEF,
  CLIENT_EMPLOYMENTINFO_DEF,
  CLIENT_IDENTIFICATION_DEF,
  CLIENT_THIRDPARTY_DEF
} from '@data/client.reference';

import { REFERRAL_DEF } from '@data/referral.reference';
import { DEPENDENT_DEF } from '@data/dependent.reference';
import { IGroupPanelItem } from '@btas/components/group-panel/group-panel-item';

import { BaseContainerComponent } from '@btas/containers/base-container.component';
import { L } from '@btas/lang';


@Component({
  selector: 'btas-personal-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './personal-details.component.pug'
})
export class PersonalDetailsComponent extends BaseContainerComponent {

  public pageModel: IPage;

  // change this to getter if performance becomes a concern
  public keyInfoItemConfig: IGroupPanelItem = CLIENT_KEYINFO_DEF;
  public keyInfos$: Observable<IClientKeyInfo[]>;

  public contactInfoItemConfig: IGroupPanelItem = CLIENT_CONTACTINFO_DEF;
  public contactInfos$: Observable<IClientContactInfo[]>;

  public otherInfoItemConfig: IGroupPanelItem = CLIENT_OTHERINFO_DEF;
  public otherInfos$: Observable<IClientOtherInfo[]>;

  public dependentItemConfig: IGroupPanelItem = DEPENDENT_DEF;
  public dependents$: Observable<IDependent[]>;

  public employmentItemConfig: IGroupPanelItem = CLIENT_EMPLOYMENTINFO_DEF;
  public employments$: Observable<IClientEmployment[]>;

  public identificationItemConfig: IGroupPanelItem = CLIENT_IDENTIFICATION_DEF;
  public identifications$: Observable<IClientIdentification[]>;

  public thirdPartyItemConfig: IGroupPanelItem = CLIENT_THIRDPARTY_DEF;
  public thirdParties$: Observable<IClientThirdParty[]>;

  public referralItemConfig: IGroupPanelItem = REFERRAL_DEF;
  public referrals$: Observable<IReferral[]>;

  public clients$: Observable<IClient[]>;

  public clientsLoading$: Observable<boolean>;
  public dependentsLoading$: Observable<boolean>;
  public referralsLoading$: Observable<boolean>;

  public onAddDependent(dependent: IDependent) {
    console.log('add dependent');
    this.store.dispatch(new client.AddDependentAction());
  }

  public onDeleteDependent(id: string) {
    console.log('delete dependent');
    this.store.dispatch(new client.DeleteDependentAction(id));
  }


  public onDetailChange(type: string, newValue: IDataModel) {
    this.store.dispatch(new client.UpdateClientDetailAction({ type, newValue }));
  }

  public onDependentChange(dependent: IDependent) {
    console.log('update dependent');
    this.store.dispatch(new client.UpdateDependentAction(dependent));
  }

  public onReferralChange(referral: IReferral) {
    this.store.dispatch(new client.UpdateReferralAction(referral));
  }

  public onNavigateAway() {
    this.store.dispatch(new client.SyncClients());
  }

  protected onInit() {
    this.pageModel = <IPage> {
      title: L('Personal Details'),
      subtitle: L(`Let's get to know each other so we can better serve you.`)
    };
    this.dependents$ = this.store.select(getDependents);
    this.dependentsLoading$ = this.store.select(getDependentsLoadingFlag);

    this.referrals$ = this.store.select(getReferrals);
    this.referralsLoading$ = this.store.select(getReferralLoadingFlag);

    this.keyInfos$ = this.store.select(getKeyInfos);
    this.contactInfos$ = this.store.select(getContactInfos);
    this.otherInfos$ = this.store.select(getOtherInfos);
    this.employments$ = this.store.select(getEmployments);
    this.identifications$ = this.store.select(getIdentifications);
    this.thirdParties$ = this.store.select(getThirdParties);
  }

  protected fetchData(): Array<Observable<any>> {
    this.store.dispatch(new client.FetchDependentsAction());
    this.store.dispatch(new client.FetchReferralAction());

    return [
      this.dependentsLoading$,
      this.referralsLoading$
    ];
  }

}
