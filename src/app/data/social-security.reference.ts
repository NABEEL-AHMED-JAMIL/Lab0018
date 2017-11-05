import { IGroupPanelItem } from '@btas/components/group-panel/group-panel-item';
import { IConfigurableField } from '@btas/common/configurable-field';
import { FrequencyOptions } from '@btas/data/base.reference';
import { IModalFieldOption } from '@btas/components/modal/modal';
import { ITabularFieldOption } from '@btas/components/tabular/tabular';

export const SOCIAL_SECURITY_DEF = <IGroupPanelItem> {
  title: 'Social Security',
  subtitle: '',
  summary: [
    <IConfigurableField<string>> {
      name: 'centrelinkCVAEligibility',
      title: 'Eligible for Centrelink / DVA benefits',
      span: 6,
      labelSpan: 12,
      fieldSpan: 12,
      type: 'radio',
      label: 'top',
      readonly: true
    },
    <IConfigurableField<string>> {
      name: 'amount',
      title: 'Amount',
      span: 6,
      labelSpan: 12,
      fieldSpan: 12,
      type: 'currency',
      label: 'top',
      readonly: true
    }
  ],
  fields: [
    <IConfigurableField<string>> {
      name: 'centrelinkCVAEligibility',
      title: 'Are you currently eligible for Centrelink / DVA benefits?',
      type: 'radio'
    },
    <IConfigurableField<any>> {
      name: 'benefits',
      title: 'Benefit Type',
      type: 'modal',
      hideWhen: '!centrelinkCVAEligibility',
      displayOnly: true,
      fieldOptions: <IModalFieldOption> {
        title: 'Benefits',
        subtitle: 'Enter any Centrelink/DVA benefits you are receiving',
        btntitle: 'Show',
        item: <IGroupPanelItem> {
          fields: [
            <IConfigurableField<any>> {
              name: 'centrelinkCVABenefits',
              type: 'table',
              fieldSpan: 12,
              fieldOptions: <ITabularFieldOption> {
                hasAdd: true,
                hasDelete: true,
                columns: [
                  <IConfigurableField<string>> {
                    name: 'benefitType',
                    title: 'Benefit Type',
                    span: 3,
                    type: 'input',
                  },
                  <IConfigurableField<string>> {
                    name: 'owner',
                    title: 'Owner',
                    type: 'select',
                    span: 3,
                    options: '$.ClientOptions',
                  },
                  <IConfigurableField<string>> {
                    name: 'amount',
                    title: 'Amount',
                    span: 3,
                    type: 'currency'
                  },
                  <IConfigurableField<string>> {
                    name: 'frequency',
                    title: 'Frequency',
                    type: 'select',
                    span: 2,
                    options: FrequencyOptions
                  },
                  <IConfigurableField<string>> {
                    name: 'taxable',
                    title: 'Taxable',
                    span: 1,
                    type: 'checkbox'
                  }
                ]
              }
            },
          ]
        }
      }
    },
    <IConfigurableField<string>> {
      name: 'centrelinkConcessionCardHolder',
      title: 'Do you have any Centrelink / DVA concession cards?',
      type: 'radio'
    },
    <IConfigurableField<string>> {
      name: 'centrelinkConcessionCardDescription',
      title: 'If \'Yes\', please provide details',
      type: 'input',
      hideWhen: '!centrelinkConcessionCardHolder'
    },
    <IConfigurableField<string>> {
      name: 'assetsGiftedInLast5Years',
      title: 'Have you \'gifted\' assets in the last 5 years?',
      type: 'radio'
    },
    <IConfigurableField<any>> {
      name: 'giftedAssets',
      displayOnly: true,
      title: 'Gift details',
      type: 'modal',
      hideWhen: '!assetsGiftedInLast5Years',
      fieldOptions: <IModalFieldOption> {
        title: 'Gifted assets',
        subtitle: 'Your \'gifted\' assets in the last 5 years',
        item: {
          fields: [
            <IConfigurableField<any>> {
              type: 'table',
              span: 12,
              fieldSpan: 12,
              name: 'giftedAssets',
              labelPosition: 'hidden',
              fieldOptions: <ITabularFieldOption> {
                hasAdd: true,
                hasDelete: true,
                columns: [
                  <IConfigurableField<string>> {
                    name: 'amount',
                    title: 'Amount',
                    type: 'currency',
                  },
                  <IConfigurableField<string>> {
                    name: 'owner',
                    title: 'Owner',
                    type: 'select',
                    options: '$.ClientOptions'
                  },
                  <IConfigurableField<string>> {
                    name: 'date',
                    title: 'Date',
                    type: 'date'
                  }]
              }
            }
          ]
        }
      }
    }
  ]
};
