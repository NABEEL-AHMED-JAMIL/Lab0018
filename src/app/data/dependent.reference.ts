import {
  HealthStatusOptions
} from '@data/health-status.reference';

import { IGroupPanelItem } from '@btas/components/group-panel/group-panel-item';
import { IDependent } from '@btas/models/dependent';
import { GenderOptions } from '@data/base.reference';

import * as uuid from 'uuid/v4';


export const DEPENDENT_DEF = <IGroupPanelItem> {
  title: 'Dependents',
  subtitle: '',
  summary: [
    {
      name: 'dependentName',
      title: '',
      span: 6,
      type: 'text',
      label: 'hidden',
      labelSpan: 12,
      fieldSpan: 12,
    }
  ],
  fields: [
    {
      name: 'dependentName',
      title: 'Name',
      type: 'input'
    },
    {
      name: 'healthStatus',
      title: 'Health Status',
      type: 'checkbox:multiselect',
      options: HealthStatusOptions
    },
    {
      name: 'provideDetails',
      title: 'If Poor, please provide details',
      type: 'textarea',
      hideWhen: "healthStatus != 'Poor'"
    },
    {
      name: 'dateOfBirth',
      title: 'Date of Birth',
      type: 'date'
    },
    {
      name: 'age',
      title: 'Age',
      type: 'text'
    },
    {
      name: 'dependentOf',
      title: 'Dependent Of',
      type: 'select',
      options: '$.ClientOptions'
    },
    {
      name: 'gender',
      title: 'Gender',
      type: 'select',
      options: GenderOptions
    },
    {
      name: 'relationship',
      title: 'Relationship',
      type: 'input'
    },
    {
      name: 'ageDependencyExpectedToCease',
      title: 'At what age would you expect dependency to cease?',
      type: 'input'
    }
  ],
  deletable: true
};


export const DEPENDENTS: IDependent[] = [
  {
    id: uuid(),
    dependentName: 'Kim Client',
    healthStatus: 'Excellent',
    provideDetails: '',
    dateOfBirth: '2007-02-04',
    age: 8,
    dependentOf: 'Joint',
    gender: 'F',
    relationship: 'Daughter',
    ageDependencyExpectedToCease: 18
  },
  {
    id: uuid(),
    dependentName: 'Jinne Client',
    healthStatus: 'Excellent',
    provideDetails: '',
    dateOfBirth: '2007-02-04',
    age: 10,
    dependentOf: 'Joint',
    gender: 'F',
    relationship: 'Daughter',
    ageDependencyExpectedToCease: 18
  }
];
