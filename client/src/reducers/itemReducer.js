import uuid from 'uuid';

const initialState = {
  items: [
    { id: uuid(), name: 'Eggs' },
    { id: uuid(), name: 'Milk' },
    { id: uuid(), name: 'Steak' },
    { id: uuid(), name: 'Water' }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ITEMS':
      return {
        ...state
      };
    default:
      return state;
  }
}