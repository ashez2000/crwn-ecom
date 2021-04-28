export const addItemToCart = (cartItems, item) => {
  // checks if the item to add already exist in the cart
  const exist = cartItems.find(i => i.id === item.id)

  // if exist update the quantity and return the cartItems
  if (exist) {
    return cartItems.map(i => {
      if (i.id === item.id) {
        return {
          ...i,
          quantity: i.quantity + 1,
        }
      } else {
        return i
      }
    })
  }

  // else the return the cartItem with the new Item added
  // setiing the quantity to one
  return [...cartItems, { ...item, quantity: 1 }]
}
