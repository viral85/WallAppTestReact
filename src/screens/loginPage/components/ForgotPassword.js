import React, {useState} from 'react';
import { connect } from 'react-redux';

function ForgotPassword(props) {
  
  return (
    <div> Forgot Password </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(ForgotPassword);