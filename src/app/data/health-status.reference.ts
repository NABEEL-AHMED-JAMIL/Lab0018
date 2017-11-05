import { IValueOption } from '@btas/common/value-option';


export const EXCELLENT = 'Excellent';
export const GOOD = 'Good';
export const POOR = 'Poor';

export type HealthStatus = 'Excellent' | 'Good' | 'Poor';

export const HealthStatusOptions: Array<IValueOption<string>> = [
  {
    title: EXCELLENT,
    value: EXCELLENT
  },
  {
    title: GOOD,
    value: GOOD
  },
  {
    title: POOR,
    value: POOR
  },
];


export const HOSPITAL_EXTRAS = 'Hospital & Extras';
export const HOSPITAL_ONLY = 'Hospital Only';
export const EXTRAS_ONLY = 'Extras Only';

export type PrivateHealthCover =
  'Hospital & Extras' | 'Hospital Only' | 'Extras Only';

export const PrivateHealthCoverOptions: Array<IValueOption<string>> = [
  {
    title: HOSPITAL_EXTRAS,
    value: HOSPITAL_EXTRAS
  },
  {
    title: HOSPITAL_ONLY,
    value: HOSPITAL_ONLY
  },
  {
    title: EXTRAS_ONLY,
    value: EXTRAS_ONLY
  }
];
