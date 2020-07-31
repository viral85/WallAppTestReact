import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { Dots } from 'react-activity';
import { LogInSchema } from '../../../validation/LogInSchema';
import { signInUser } from '../../../redux/actions'

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
        <div className="common-page-wrapper">
            <div className="login-form shadow">
                <div className="card-body">
                    <div className="card-head text-center">
                        <h2>Login</h2>
                    </div>
                    <div className="card-text">
                        {/* <div className="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div>  */}
                        <form>
                            {/* to error: add className "has-danger"  */}
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control form-control-sm" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Sign in</button>

                            <div className="sign-up">
                                Don't have an account? <a href="#">Sign up</a>
                                <a href="#" className="float-right">Forgot password?</a>
                            </div>
                            
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

const mapDispatchToProps = {
    signInUser
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))