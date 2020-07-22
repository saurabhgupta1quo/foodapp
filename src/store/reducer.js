import * as actionTypes from './actions';
import productModel from '../products/model/productModel';

const initialState = {
    items: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_FOOD_ITEMS:
            const newItem = {
                id: Math.random(),
                name: 'Burger',
                keyIngredients: 'Salt',
                spiceLevel : 'low',
                type: 'starter',
                origin: 'asian'
            }
            return {
                ...state,
                items: state.items.concat( newItem )
            }
        case actionTypes.REMOVE_FOOD_ITEMS:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.itemId)
            }
    }
    return state;
};

export default reducer;