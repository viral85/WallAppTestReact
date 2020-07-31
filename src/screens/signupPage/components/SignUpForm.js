import React, { useEffect } from 'react';

import {
	Redirect,
	withRouter,
	useHistory,
	useLocation,
	Link
} from "react-router-dom";
import { Formik } from 'formik';
import { SignupSchema } from '../../../validation/SignupSchema';
import { signInQuery, getCurrentUser } from '../../../api/Queries';

import LoadingSpinner from '../../../sharedComponents/LoadingSpinner';

import { UserContext } from "../../../contexts/UserContext";

function SignUpForm(props) {
	const [errorMessage, setErrorMessage] = React.useState("");
	const [isLoading, setIsLoading] = React.useState(false);
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
															<input 
																type="text" 
																className="form-control form-control-sm" />
													</div>
													<div className="form-group">
															<label>Last name</label>
															<input 
																type="text" 
																className="form-control form-control-sm" 
															/>
													</div>
													<div className="form-group">
															<label htmlFor="exampleInputEmail1">Email address</label>
															<input 
																type="email" 
																className="form-control form-control-sm" 
																id="exampleInputEmail1" 
																aria-describedby="emailHelp" 
															/>
													</div>
													<div className="form-group">
															<label htmlFor="exampleInputPassword1">Password</label>
															<input 
																type="password" 
																className="form-control form-control-sm" 
																id="exampleInputPassword1" 
															/>
													</div>
													<div className="form-group">
															<label htmlFor="phonenumber">Phone Number</label>
															<input 
																type="text" 
																className="form-control form-control-sm" 
																id="phonenumber" 
															/>
													</div>
													{/* +XX-XXXX-XXXX */}
													<button type="submit" className="btn btn-primary btn-block">Sign up</button>
													<div className="already-account sign-up">
															<p>Allready have an account? <Link to="/Login">Login</Link></p>   
													</div>
											</form>
									</div>
							</div>
					</div>
			</div>
	);
}

export default SignUpForm;