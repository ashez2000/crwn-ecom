import './cart-dropdown.styles.scss'

// redux
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selector'

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

// using reselect now
const mapStateToProps = state => {
  return {
    cartItems: selectCartItems(state),
  }
}

export default connect(mapStateToProps)(CartDropdown)
