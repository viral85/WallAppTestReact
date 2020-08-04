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

function ResetPasswordForm(props) {
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
                        <h2>Reset Password</h2>
                    </div>
                    <div className="card-text">
                        {/* <div className="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div>  */}
                        <form>
                            {/* to error: add className "has-danger"  */}
                            <div className="form-group">
                                <label>New password</label>
                                <input type="password" placeholder="Enter first name" className="form-control form-control-sm" />
                            </div>
                            <div className="form-group">
                                <label>Confirm password</label>
                                <input type="password" placeholder="Enter last name" className="form-control form-control-sm" />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Reset Password</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordForm)