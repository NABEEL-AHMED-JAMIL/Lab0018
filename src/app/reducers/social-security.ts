import { ISocialSecurity } from '@btas/models/social-security';
import { ActionTypes, Actions } from '@btas/actions/social-security';

export interface State {
  socialSecurity: ISocialSecurity | null;
  saved?: ISocialSecurity;
}

export const initialState: State = {
  socialSecurity: null,
};

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.SOCIALSECURITY_FETCHED:
      return {
        ...state,
        socialSecurity: action.payload,
        saved: action.payload
      };
    case ActionTypes.UPDATE_SOCIALSECURITY:
      return {
        ...state,
        socialSecurity: {
          ...state.socialSecurity,
          ...action.payload
        }
      };
    default:
      return state;
  }
}

export const getSocialSecurity = (state: State) => state.socialSecurity;
