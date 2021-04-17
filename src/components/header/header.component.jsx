import './header.styles.scss'

import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'

// firebase
import { auth } from '../../firebase/firebase.utils'

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

export default Header
