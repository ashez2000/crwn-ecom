import './cart-item.styles.scss'
import { ReactComponent as CartIcon } from '../../assets/cart.svg'

// redux
import { connect } from 'react-redux'
import { toggleCart } from '../../redux/cart/cart.actions'

const CartItem = ({ toggleCart, itemCount }) => {
  return (
    <div className='cart-icon' onClick={toggleCart}>
      <CartIcon className='cart' />
      <span className='item-count'>{itemCount}</span>
    </div>
  )
}

const mapStateToProps = ({ cart: { cartItems } }) => {
  return {
    itemCount: cartItems.reduce((acc, i) => acc + i.quantity, 0),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleCart: () => dispatch(toggleCart()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
