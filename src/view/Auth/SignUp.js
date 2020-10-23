import React, { Component } from "react";
import { RegisterForm } from "../../components/RegisterForm";

class SignUp extends Component {
    render() {
        return (
            <RegisterForm submit={signUpRequest} title={'Sign Up'} />
        )
    }
}

export default SignUp