import { Switch, Route } from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import Login from './components/Login'
import Product from './components/Product'
import { useState } from 'react'
import { User } from './types'
import Slider from './components/Slider'
import NavBar from './components/Navbar'
import { makeStyles } from '@material-ui/core/styles'
import FooterNav from './components/FooterNav'
import Background from './components/Background'

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: 'rgb(61, 0, 0)',
  },
}))
function App() {
  const classes = useStyles()
  const [user, setUser] = useState<User>()
  const setUserData = (user: User) => {
    setUser(user)
  }

  return (
    <div className={classes.App}>
      <Switch>
        <Route exact path="/">
          <Login setUser={setUserData} />
          <NavBar />
          <Slider />
          <Home />
          <FooterNav />
        </Route>
        <Route exact path="/products/:productId">
          <Product />
        </Route>
      </Switch>
    </div>
  )
}

export default App
