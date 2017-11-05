import * as playground from '@btas/actions/playground';


export interface IHero {
  id: string;
  name: string;
  age: number;
  gender: 'M' | 'F';
  league: string;
}


export interface State {
  heroes: IHero[] | null;
}


export const initialState: State = {
  heroes: null
};


export function reducer(state = initialState, action: playground.Action): State {
  switch (action.type) {
    case playground.ActionTypes.HERO_FETCHED:

      return {
        ...state,
        heroes: action.payload
      };

    case playground.ActionTypes.UPDATE_HERO:
      const heroes = [];
      const hero = action.payload;

      state.heroes.forEach((m) => {
        if (m.id === hero.id) {
          heroes.push({
            ...m,
            ...hero
          });
        } else {
          heroes.push(m);
        }

        return {
          ...state,
          heroes
        };

      });

    default:
      return state;

  }
}


export const getHeroes = (state: State) => state.heroes;
