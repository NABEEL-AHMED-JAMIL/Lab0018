import { Breadcrumb } from '@btas/components/breadcrumb/breadcrumb';


export interface State {
  crumbs: Breadcrumb[] | null;
}


export const initialState: State = {
  crumbs: null
};
