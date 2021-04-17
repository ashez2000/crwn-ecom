import React, { Component } from 'react'
import './App.css'

import { Switch, Route } from 'react-router-dom'

// firebase
import { auth, createUserProfile } from './firebase/firebase.utils'

// pages and components
import Homepage from './pages/homepage/homepage.component'
import Shop from './pages/shop/shop.component'
import SignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component'

import Header from './components/header/header.component'

class App extends Component {
  constructor() {
    super()

    this.state = { currentUser: null }
  }

  unSubscribeFromAuth = null

  componentDidMount() {
    // this tracks the user auth state
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        // save the user profile
        const userRef = await createUserProfile(user)

        // fetching and seting the currentUser state
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          })
        })
      } else {
        this.setState({ currentUser: null })
      }
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {
    const { currentUser } = this.state

    return (
      <div className='App'>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route path='/login' component={SignUpPage} />
        </Switch>
      </div>
    )
  }
}

export default App
