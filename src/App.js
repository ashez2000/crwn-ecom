import './App.css'

import { Switch, Route } from 'react-router-dom'

// pages and components
import Homepage from './pages/homepage/homepage.component'
import Shop from './pages/shop/shop.component'
import SignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component'

import Header from './components/header/header.component'

const App = () => {
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

export default App
