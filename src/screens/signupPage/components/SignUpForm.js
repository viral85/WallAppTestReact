import React, {useEffect} from 'react';
import 'react-activity/dist/react-activity.css';
import { connect } from 'react-redux'
import {createUser} from '../../../redux/actions'
import {
  useHistory,
  useLocation,
  useParams
} from "react-router";
import {Link} from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SignUpForm(props) {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/User/Dashboard" } };
  let query = useQuery();

  useEffect(()=>{
    console.log(query.get('plan'));
  }, [])

  return (
    <div>
      Sign Up Form
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