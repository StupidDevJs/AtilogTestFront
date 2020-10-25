import React, {Component} from "react";
import {RegisterForm} from "../../components/RegisterForm";
import {connect} from "react-redux";
import {authorize} from "../../redux/actions/actions";

class SignIn extends Component {

    render() {
        return (
            <RegisterForm submit={this.props.authorize} title={'Sign In'}/>
        )
    }
}

const mStP = (state) => {
    const {currentUser} = state.auth;
    return {
        currentUser,
    };
}
export default connect(mStP, {authorize})(SignIn)