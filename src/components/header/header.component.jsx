import './header.styles.scss'

import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'

// firebase and redux
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'

const Header = ({ currentUser }) => {
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
      </div>
    </div>
  )
}

// state is refered to the state of 'store'
const mapStateToProps = state => {
  return {
    // state.user is key in the root-reducer
    currentUser: state.user.currentUser,
  }
}

export default connect(mapStateToProps)(Header)
