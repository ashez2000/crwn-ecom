import CartTypes from './cart.types'

export const toggleCart = () => {
  return {
    type: CartTypes.TOGGLE_CART_HIDDEN,
  }
}

export const addItem = item => {
  return {
    type: CartTypes.ADD_ITEM,
    payload: item,
  }
}
