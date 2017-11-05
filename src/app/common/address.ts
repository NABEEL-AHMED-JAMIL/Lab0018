export type State =
  'NSW' | 'VIC' | 'QLD' | 'ACT' | 'SA' | 'WA' | 'TAS' | 'NT';


export interface IAddress {
  addressLine1: string;
  addressLine2: string;
  state: State;
  postcode: number;
  country?: string;
}
