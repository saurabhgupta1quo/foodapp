import * as actionTypes from './actionTypes';

export const createItem = (item) => {
    return {
      type: actionTypes.ADD_FOOD_ITEMS,
      item: item
    }
  };

  export const deleteItem = (id) => {
    return {
        type: actionTypes.REMOVE_FOOD_ITEMS,
        id: id
    }
}