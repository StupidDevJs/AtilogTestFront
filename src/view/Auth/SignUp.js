import React, {Component} from "react";
import {RegisterForm} from "../../components/RegisterForm";

class SignUp extends Component {
    signUpRequest = () => {
        console.log(123)
    }

    render() {
        return (
            <RegisterForm submit={this.signUpRequest} title={'Sign Up'}/>
        )
    }
}

export default SignUp