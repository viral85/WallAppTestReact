import React, { useEffect } from 'react';
import 'react-activity/dist/react-activity.css';
import { connect } from 'react-redux'
import { createUser } from '../../../redux/actions'
import {
    useHistory,
    useLocation,
    useParams
} from "react-router";
import { Link } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function SignUpForm(props) {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/User/Dashboard" } };
    let query = useQuery();

    useEffect(() => {
        console.log(query.get('plan'));
    }, [])

    return (
        <div className="common-page-wrapper">
            <div className="login-form shadow">

                <div className="card-body">
                    <div className="card-head text-center">
                        <h2>Register</h2>
                    </div>
                    <div className="card-text">
                        {/* <div className="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div>  */}
                        <form>
                            {/* to error: add className "has-danger"  */}
                            <div className="form-group">
                                <label>First name</label>
                                <input type="text" className="form-control form-control-sm" />
                            </div>
                            <div className="form-group">
                                <label>Last name</label>
                                <input type="text" className="form-control form-control-sm" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control form-control-sm" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Sign up</button>
                            <div className="already-account sign-up">
                                <p>Allready have an account? <a href="#">Login</a></p>   
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
    createUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)