import CartTypes from './cart.types'

export const toggleCart = () => {
  return {
    type: CartTypes.TOGGLE_CART_HIDDEN,
  }
}
