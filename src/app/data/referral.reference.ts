import { IValueOption } from '@btas/common/value-option';
import { IGroupPanelItem } from '@btas/components/group-panel/group-panel-item';
import { IReferral } from '@btas/models/referral';

import * as uuid from 'uuid/v4';


export type ReferralType =
  'Bank Staff' | 'Planner Referral' | 'Other Referral'
  | 'Self Generated';


export const BANK_STAFF: ReferralType = 'Bank Staff';
export const PLANNER_REFERRAL: ReferralType = 'Planner Referral';
export const OTHER_REFERRAL: ReferralType = 'Other Referral';
export const SELF_GENERATED: ReferralType = 'Self Generated';


export const ReferralTypeOptions: Array<IValueOption<ReferralType>> = [
  {
    title: BANK_STAFF,
    value: BANK_STAFF
  },
  {
    title: PLANNER_REFERRAL,
    value: PLANNER_REFERRAL,
  },
  {
    title: OTHER_REFERRAL,
    value: OTHER_REFERRAL
  },
  {
    title: SELF_GENERATED,
    value: SELF_GENERATED
  }
];


export const REFERRAL_DEF = <IGroupPanelItem> {
  title: 'Referral Details',
  subtitle: '',
  summary: [
    {
      name: 'referralName',
      title: 'Referral',
      span: 6,
      labelSpan: 12,
      fieldSpan: 12,
      type: 'text',
      label: 'top'
    }
  ],
  fields: [
    {
      name: 'referralName',
      title: 'Referral Name',
      type: 'input'
    },
    {
      name: 'type',
      title: 'Referral Type',
      type: 'select',
      options: ReferralTypeOptions
    },
    {
      name: 'furtherDetails',
      title: 'Further Details',
      type: 'textarea'
    }
  ]
};


export const REFERRAL: IReferral = {
  id: uuid(),
  referralName: 'Hutt',
  type: 'Bank Staff',
  furtherDetails: 'text@text.com'
};
