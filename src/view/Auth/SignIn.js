import React, { Component } from "react";
import { RegisterForm } from "../../components/RegisterForm";
import { connect } from "react-redux";
import { signInRequest } from "../../redux/actions/actions";

class SignIn extends Component {

    render() {
        return (
            <RegisterForm submit={this.props.signInRequest} title={'Sign In'} />
        )
    }
}

const mStP = (state) => {
    const { currentUser, isFetching } = state.auth;
    return {
        isFetching,
        currentUser,
    };
}
export default connect(mStP, { signInRequest })(SignIn)