import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { Dots } from 'react-activity';
import {LogInSchema} from '../../../validation/LogInSchema';
import {signInUser} from '../../../redux/actions'
import {
  Link,
  withRouter,
  useHistory,
  useLocation
} from "react-router-dom";

function LoginForm(props) {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/User/Dashboard" } };
  return (
    <div>
      Login Form
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = {
  signInUser
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))