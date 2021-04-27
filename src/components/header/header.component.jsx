import './header.styles.scss'

import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'

// firebase and redux
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'

// components
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/login'>
            LOGIN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  )
}

// state is refered to the state of 'store'
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => {
  return {
    // state.user is key in the root-reducer, similarly hidden
    currentUser,
    hidden,
  }
}

export default connect(mapStateToProps)(Header)
