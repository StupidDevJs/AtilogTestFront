import React, {Component} from "react";
import {RegisterForm} from "../../components/RegisterForm";
import {connect} from "react-redux";
import {signUpRequest} from "../../redux/actions/actions";

class Register extends Component {

    render() {

        return (
            <RegisterForm submit={this.props.signUpRequest}/>
        )
    }
}

const mStP = (state) => {
    const {currentUser, isFetching} = state.auth;
    return {
        isFetching,
        currentUser,
    };
}
export default connect(mStP, {signUpRequest})(Register)