import React, { Component } from "react";
import { RegisterForm } from "../../components/RegisterForm";
import { connect } from "react-redux";

class SignUp extends Component {
    render() {
        const signUpRequest = this.props.signUpRequest
        return (
            <RegisterForm submit={signUpRequest} title={'Sign Up'} />
        )
    }
}

export default SignUp