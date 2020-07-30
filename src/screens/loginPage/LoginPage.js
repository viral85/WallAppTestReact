import React, {useEffect} from 'react';
import LoginForm from './components/LoginForm'
import ForgotPassword from './components/ForgotPassword'
import LoginHeader from './components/LoginHeader'
import LoginFooter from './components/LoginFooter'
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

function LoginPage() {
  let { path, url } = useRouteMatch();
  let location = useLocation();
  let history = useHistory();
  let user = useSelector(state=>state.auth.user);
  let { from } = location.state || { from: { pathname: "/" } };

  useEffect(()=>{
    if(user){
      history.replace(from)
    }
  }, [])

  return (
    <div>
      <LoginHeader />
      <Switch>
        <Route exact path={path}>
          <LoginForm />
        </Route>
        <Route exact path={`${path}/ForgotPassword`}>
          <ForgotPassword title="Forgot Password?" action="Submit" />
        </Route>
      </Switch>
      <LoginFooter />
    </div>
  );
}

export default LoginPage;
