import shortid from 'shortid';
// selectors
export const getSearchString = state => state.SearchString;
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;
export const countAllCards = ({cards}) => cards.length;
// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;
// actions types
export const CHANGED = createActionName('CHANGED');
// action creators
export const createAction_changeSearchString = payload => ({ payload: { ...payload, id: shortid.generate() }, type: CHANGED });
// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}

