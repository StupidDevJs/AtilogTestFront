import React, {Component} from "react";
import {RegisterForm} from "../../components/RegisterForm";
import {connect} from "react-redux";
import {signUp} from "../../redux/saga/sagas";

class Register extends Component {

    render() {
        return (
            <RegisterForm/>
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
export default connect(mStP, {signUp})(Register)