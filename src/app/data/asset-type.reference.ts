import { IValueOption } from '@btas/common/value-option';


export const PRINCIPLE_RESIDENCE = 'Principle residence';
export const HOLIDAY_HOUSE = 'Holiday house';
export const MOTOR_VEHICLE = 'Motor vehicle';
export const BOAT = 'Boat/caravan';
export const COLLECTABLE = 'Collectibles';
export const OTHER = 'Other';

export type AssetType =
  'Principle residence' | 'Holiday house' | 'Motor vehicle'
  | 'Boat/caravan'| 'Collectibles' | 'Other';

export const AssetTypeOptions: Array<IValueOption<string>> = [
  {
    title: PRINCIPLE_RESIDENCE,
    value: PRINCIPLE_RESIDENCE
  },
  {
    title: HOLIDAY_HOUSE,
    value: HOLIDAY_HOUSE,
  },
  {
    title: MOTOR_VEHICLE,
    value: MOTOR_VEHICLE
  },
  {
    title: BOAT,
    value: BOAT
  },
  {
    title: COLLECTABLE,
    value: COLLECTABLE
  },
  {
    title: OTHER,
    value: OTHER
  }
];
