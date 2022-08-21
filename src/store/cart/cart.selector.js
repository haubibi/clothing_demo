// state.cart = {
//     isCartClicked: false,
//     cartItems: [],
//     cartCount: 0,
//     totalPrice: 0
// }

import { createSelector } from 'reselect';

const cartReducer = (state) => {
    // console.log('state change')
    return state.cart
};

export const isCartClickedSelector = createSelector(
    [cartReducer],
    (cart) => {
        return cart.isCartClicked
    }
)
export const cartItemsSelector = createSelector(
    [cartReducer],
    (cart) => cart.cartItems
)
export const cartCountSelector = createSelector(
    [cartReducer],
    (cart) => cart.cartCount
)
export const cartTotalPriceSelector = createSelector(
    [cartReducer],
    (cart) => cart.totalPrice
)



// export const isCartClickedSelector = (state) => state.cart.isCartClicked;
// export const cartItemsSelector = (state) => state.cart.cartItems;
// export const cartCountSelector = (state) => state.cart.cartCount;
// export const cartTotalPriceSelector = (state) => state.cart.totalPrice;