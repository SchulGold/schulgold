import React, { Component } from 'react';
import { ConfirmSignIn, ConfirmSignUp, ForgotPassword, RequireNewPassword, SignIn, SignUp, VerifyContact, withAuthenticator } from 'aws-amplify-react';


// This is my custom Sign in component
class MySignIn extends SignIn {
    render() {

    }
}

export default [
    <MySignIn />,
    <ConfirmSignIn />,
    <VerifyContact />,
    <SignUp />,
    <ConfirmSignUp />,
    <ForgotPassword />,
    <RequireNewPassword />
]