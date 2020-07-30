import React from 'react';
import SignUpForm from './components/SignUpForm'
import SignUpHeader from './components/SignUpHeader'
import SignUpFooter from './components/SignUpFooter'
import { connect } from 'react-redux'

function SignUpPage(props) {
  return (
    <div>
      <SignUpHeader />
        <SignUpForm />
      <SignUpFooter />
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
)(SignUpPage)
