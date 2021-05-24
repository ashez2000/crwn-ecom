import './cart-dropdown.styles.scss'

import { withRouter } from 'react-router-dom'

// redux
import { connect } from 'react-redux'
import { toggleCart } from '../../redux/cart/cart.actions'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selector'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(i => <CartItem key={i.id} item={i} />)
        ) : (
          <span className='empty-message'>Cart is Empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout')
          dispatch(toggleCart())
        }}
      >
        Checkout
      </CustomButton>
    </div>
  )
}

// using reselect now
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown))

// dispatch is passes to props
