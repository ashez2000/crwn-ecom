import './cart-dropdown.styles.scss'

import { connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(i => (
          <CartItem key={i.id} item={i} />
        ))}
      </div>
      <CustomButton>Checkout</CustomButton>
    </div>
  )
}

const mapStateToProps = ({ cart: { cartItems } }) => {
  return {
    cartItems,
  }
}

export default connect(mapStateToProps)(CartDropdown)
