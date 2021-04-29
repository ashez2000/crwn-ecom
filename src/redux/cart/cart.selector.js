import { createSelector } from 'reselect'

// selecting peice of state one level down
const selectCart = state => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, i) => acc + i.quantity, 0)
)

// reselect id for getting a peice of data from the store
// this comes with some inbuild memoization
// main purpose is to optimize performance

// used to access a peice of state from store
// in an efficent manner
