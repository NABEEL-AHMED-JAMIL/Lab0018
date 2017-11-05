import { IGroupPanelItem } from '@btas/components/group-panel/group-panel-item';


export const RETIREMENT_GOALS = [
  <IGroupPanelItem> {
    title: 'Retirement',
    summary: [
      {
        name: 'goalDescription',
        title: 'Goal Description',
        span: 6,
        type: 'input:text',
        label: 'top'
      },
      {
        name: 'goalType',
        title: 'Goal Type',
        span: 6,
        type: 'select',
        label: 'top'
      }
    ],
    fields: [
      {
        name: 'clientGoalDescription',
        title: 'Client\'s Goal Description',
        type: 'text',
        value: 'Hello'
      },
      {
        name: 'adviceRequired',
        title: 'Advice Required',
        type: 'radio',
      },
      {
        name: 'targetAge',
        title: 'Target Age',
        type: 'input:number'
      },
      {
        name: 'targetYearlyIncome',
        title: 'Target Yearly Income',
        type: 'input:money'
      },
      {
        name: 'existingFunds',
        title: 'Existing Funds',
        type: 'input:money'
      },
      {
        name: 'currentCashSurplus',
        title: 'Current Cash Surplus',
        type: 'btas:periodicalPayment'
      },
      {
        name: 'additionalNotes',
        title: 'Additional Notes',
        type: 'textarea'
      },
      {
        name: 'selectSomething',
        title: 'Multiselect',
        type: 'checkbox:multiselect',
        options: [
          { title: 'Amsterdam', value: 'amsterdam' },
          { title: 'Belgium', value: 'belgium' },
          { title: 'Carcass', value: 'carcass' }
        ]
      }
    ]
  }
];
