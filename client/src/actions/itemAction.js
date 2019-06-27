export const getItems = () => {
  return {
    type: 'GET_ITEMS'
  };
};

export const deleteItem = (id) => {
  return {
    type: 'DELETE_ITEM',
    id
  };
};

export const addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    item
  };
};