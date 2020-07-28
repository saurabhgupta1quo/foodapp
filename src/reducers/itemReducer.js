import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type){
      
      case actionTypes.ADD_FOOD_ITEMS:
      return [
        ...state,
        Object.assign({}, action.item)
      ];
      case actionTypes.REMOVE_FOOD_ITEMS:
        return state.filter((data, i) => i !== action.id);
      default:
            return state;
    }
  };