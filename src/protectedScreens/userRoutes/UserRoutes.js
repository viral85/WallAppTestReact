import React, { useState, useEffect} from 'react'
import Dashboard from '../dashboard/Dashboard'
import NoContentPage from '../noContentPage/NoContentPage'
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux';

function UserRoutes({auth, user}){
  return (
    <div>
      <Switch>
        <Route path={`/User/Dashboard`}>
          <Dashboard />
        </Route>
        <Route path={`/User`}>
          <NoContentPage />
        </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    user: state.user
  }
}

export default connect(mapStateToProps)(UserRoutes)
