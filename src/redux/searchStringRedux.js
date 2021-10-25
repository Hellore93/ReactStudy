import shortid from 'shortid';

export const getSearchString = state => state.searchString;
export const countVisibleCards = ({cards}, searchString) => cards.filter(card => new RegExp(searchString, 'i').test(card.title));
export const countAllCards = ({cards}) => cards.lenght;

const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;

export const CHANGE = createActionName('CHANGE');

export const createAction_changeSearchString = payload => ({ payload: payload, id: shortid.generate(), type: CHANGE });

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}