import './App.css'

import { Switch, Route } from 'react-router-dom'

// pages
import Homepage from './pages/homepage/homepage.component'
import Shop from './pages/shop/shop.component'

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  )
}

export default App
