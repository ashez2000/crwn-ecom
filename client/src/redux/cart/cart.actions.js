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

export const clearItem = item => {
  return {
    type: CartTypes.CLEAR_ITEM,
    payload: item,
  }
}

export const removeItem = item => {
  return {
    type: CartTypes.REMOVE_ITEM,
    payload: item,
  }
}
