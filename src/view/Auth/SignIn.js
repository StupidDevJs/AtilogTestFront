import React, {Component} from "react";
import {RegisterForm} from "../../components/RegisterForm";
import {connect} from "react-redux";
import {authorize} from "../../redux/actions/actions";

class SignIn extends Component {
    render() {
        return (
            <RegisterForm err={this.props.err} submit={this.props.authorize} title={'Sign In'}/>
        )
    }
}

const mStP = (state) => {
    const {err} = state.auth;
    return {
        err,
    };
}
export default connect(mStP, {authorize})(SignIn)