import './cart-item.styles.scss'
import { ReactComponent as CartIcon } from '../../assets/cart.svg'

import { connect } from 'react-redux'
import { toggleCart } from '../../redux/cart/cart.actions'

const CartItem = ({ toggleCart }) => {
  return (
    <div className='cart-icon' onClick={toggleCart}>
      <CartIcon className='cart' />
      <span className='item-count'>0</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    toggleCart: () => dispatch(toggleCart()),
  }
}

export default connect(null, mapDispatchToProps)(CartItem)
