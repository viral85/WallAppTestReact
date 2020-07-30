import React, { useEffect } from 'react'
import LandingPage from './screens/landingPage/LandingPage'
import LoginPage from './screens/loginPage/LoginPage'
import SignUpPage from './screens/signupPage/SignUpPage'
import UserRoutes from './protectedScreens/userRoutes/UserRoutes'
import { setUser } from './redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

function AppRouter() {
  const user = useSelector((state) => state.auth.user)
  const userSession = JSON.parse(localStorage.getItem('user_session'))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setUser(userSession))
  }, [])

  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/Login',
                state: { from: location }
              }}
            />
          )
        }
      />
    )
  }
  return (
    <Router>
      <Switch>
        <Route path="/Login">
          <LoginPage />
        </Route>
        <Route path="/Signup">
          <SignUpPage />
        </Route>
        <PrivateRoute path="/User">
          <UserRoutes />
        </PrivateRoute>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default AppRouter;
