import React from 'react';
import ResetPasswordForm from './components/ResetPasswordForm'
import { connect } from 'react-redux'

function ResetPasswordPage(props) {
  return (
    <div>
        <ResetPasswordForm />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(
  mapStateToProps,
)(ResetPasswordPage)
