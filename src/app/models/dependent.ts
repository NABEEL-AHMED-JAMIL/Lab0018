import { IDataModel } from './base';
import {
  Gender
} from '@data/base.reference';


export interface IDependent extends IDataModel {
  dependentName: string;
  healthStatus: string;
  provideDetails: string;
  dateOfBirth: string;
  age: number;
  dependentOf: string;
  gender: Gender;
  relationship: string;
  ageDependencyExpectedToCease: number;
}
