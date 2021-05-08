import React, { Component } from 'react'
import './App.css'

import { Switch, Route, Redirect } from 'react-router-dom'

// firebase and redux
import {
  auth,
  createUserProfile,
  addCollectionAndDocs,
} from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selector'
import { selectCollectionForPreview } from './redux/shop/shop.selector'

// pages and components
import Homepage from './pages/homepage/homepage.component'
import Shop from './pages/shop/shop.component'
import SignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'

import Header from './components/header/header.component'

class App extends Component {
  unSubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser, collectionArr } = this.props
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

    // addCollectionAndDocs(
    //   'collections',
    //   collectionArr.map(({ title, items }) => ({ title, items }))
    // )
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {
    const { currentUser } = this.props
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route
            exact
            path='/login'
            render={() => (currentUser ? <Redirect to='/' /> : <SignUpPage />)}
          />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionArr: selectCollectionForPreview,
})

// dispatch() takes the action object iie {type:, paylaod:}
const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user)),
  }
}

// connect()() connects to the redux store
// take mapstate, and dispatch
export default connect(mapStateToProps, mapDispatchToProps)(App)
