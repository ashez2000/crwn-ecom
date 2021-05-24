import './cart-item.styles.scss'
import { ReactComponent as CartIcon } from '../../assets/cart.svg'

// redux
import { connect } from 'react-redux'
import { toggleCart } from '../../redux/cart/cart.actions'
import { createStructuredSelector } from 'reselect'
import { selectCartItemsCount } from '../../redux/cart/cart.selector'

const CartItem = ({ toggleCart, itemCount }) => {
  return (
    <div className='cart-icon' onClick={toggleCart}>
      <CartIcon className='cart' />
      <span className='item-count'>{itemCount}</span>
    </div>
  )
}

// using reselect now
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
})

const mapDispatchToProps = dispatch => {
  return {
    toggleCart: () => dispatch(toggleCart()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
