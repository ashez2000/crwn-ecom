import React, { Component } from 'react'
import './App.css'

import { Switch, Route } from 'react-router-dom'

// firebase and redux
import { auth, createUserProfile } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'

// pages and components
import Homepage from './pages/homepage/homepage.component'
import Shop from './pages/shop/shop.component'
import SignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component'

import Header from './components/header/header.component'

class App extends Component {
  unSubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    // this tracks the user auth state
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        // save the user profile
        const userRef = await createUserProfile(user)

        // fetching and seting the currentUser state
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          })
        })
      } else {
        setCurrentUser(user)
      }
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route path='/login' component={SignUpPage} />
        </Switch>
      </div>
    )
  }
}

// dispatch() takes the action object iie {type:, paylaod:}
const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user)),
  }
}

// connect()() connects to the redux store
// take mapstate, and dispatch
export default connect(null, mapDispatchToProps)(App)
