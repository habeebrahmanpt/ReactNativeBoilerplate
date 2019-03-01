import * as Actions from '../ActionTypes'
import initialState from './initialState';
const CartReducer = (state = initialState.cart, action) => {
    console.log("dddddddddd  action", action)
    switch (action.type) {

        case Actions.CART_ADD_ITEM:
            console.log("dddddddddddd state", state)
            return Object.assign({}, state, { cartData: [...state.cartData, action.payload] });
        // return [...state, action.payload];
        case Actions.CART_REMOVE_ITEM:
            return Object.assign({}, state, { cartData: state.cartData.filter(i => i.id !== action.payload.id) });
        // return state.filter(i => i.id !== action.payload.id);
        case Actions.CART_CLEAR:
            return Object.assign({}, state, initialState.cart);
        default:
            return state;
    }
}

export default CartReducer;