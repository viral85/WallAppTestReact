import React, {useState, useEffect} from 'react';
import { Formik } from 'formik';

import {
    withRouter,
    useHistory,
} from "react-router-dom";

function ForgotPassword(props) {
  
  return (
      <div className="common-page-wrapper">
          <div className="login-form shadow">
              <div className="card-body">
                  <div className="card-head text-center">
                      <h2>Forgot Password</h2>
                  </div>
                  <div className="card-text">
                      {/* <div className="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div>  */}
                      <form>
                          {/* to error: add className "has-danger"  */}
                          <div className="form-group">
                              <label>Email</label>
                              <input type="email" placeholder="Enter email address" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                          </div>
                          <button type="submit" className="btn btn-primary btn-block">Send password reset email</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default withRouter(ForgotPassword);