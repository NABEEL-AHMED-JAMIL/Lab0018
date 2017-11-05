import { IGroupPanelItem } from '@btas/components/group-panel/group-panel-item';
import { IRedundancy , IRedundancyETP } from '@btas/models/redundancy';
import { EtpTypeOptions , NonEtpTypeOptions } from '@data/etp.reference';
import { Currency } from '@btas/common/currency';


export const REDUNDANCY_ETP_DEF = <IGroupPanelItem> {
  title: 'Redundancy or Early Retirement Payment',
  subtitle: '',
  summary: [],
  fields: [
    {
      name: 'appliesEtp',
      title: 'Redundancy/ETP applies',
      type: 'radio',
    },
    {
      name: 'owner',
      title: 'Owner',
      type: 'select',
      options: '$.ClientOptions',
    },
    {
      name: 'employmentCommencementDate',
      title: 'Employment commencement date',
      type: 'date',
      hideWhen: '!appliesEtp',
    },
    {
      name: 'dateWhenEmploymentToCease',
      title: 'Date of when employment is to cease',
      type: 'date',
      hideWhen: '!appliesEtp',
    },
    {
      name: 'paymentAmount',
      title: 'Amount of redundancy/early retirement payment',
      type: 'currency',
      hideWhen: '!appliesEtp',
    },
    {
      name: 'paymentForUnusedAnnualLeave',
      title: 'Payment for unused annual leave',
      type: 'currency',
      hideWhen: '!appliesEtp',
    },
    {
      name: 'paymentForUnusedLongServiceLeave',
      title: 'Payment for unused long service leave',
      type: 'currency',
      hideWhen: '!appliesEtp',
    },
    {
      name: 'exitSuperUponTermination',
      title: 'Will you need to exit your super fund upon termination of your employment?',
      type: 'radio',
    },
    {
      name: 'etpType',
      title: 'ETP type',
      type: 'checkbox:multiselect',
      options: EtpTypeOptions,
    },
    {
      name: 'amountsIncludedEtp',
      title: 'Amounts included in ETP',
      type: 'currency'

    },
    {
      name: 'nonEtpType',
      title: 'Non ETP type',
      type: 'checkbox:multiselect',
      options: NonEtpTypeOptions
    },
    {
      name: 'amountsExcludedFromEtp',
      title: 'Amounts excluded from ETP - Non ETP',
      type: 'currency'
    }
  ],
  deletable: true
};

export const REDUNDANCY: IRedundancy =
  <IRedundancy> {
    redundancies: <IRedundancyETP[]> [
      {
        appliesEtp: true,
        owner: 'Joint',
        employmentCommencementDate: '2017-02-10',
        dateWhenEmploymentToCease: '2017-08-01',
        paymentAmount: <Currency> { value: 85697, code: 'USD'},
        paymentForUnusedAnnualLeave: <Currency> { value: 8569700, code: 'USD'},
        paymentForUnusedLongServiceLeave: <Currency> { value: 10000000, code: 'USD'},
        exitSuperUponTermination: false,
        etpType : ['Unused sick leave'],
        amountsIncludedEtp: <Currency> { value: 25987, code: 'USD'},
        nonEtpType: ['Unused annual leave'],
        amountsExcludedFromEtp: <Currency> { value: 12985, code: 'USD'}
      }]
  };

