import {Given, Then, When} from "cucumber";
import {SignInPage} from "../PageObjects/SignInPage";
import {HomePage} from "../PageObjects/HomePage";
import instance from './axios.config';
import {SharedContext} from "./sharedContext";

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;
const axios = instance;

const signInPage = new SignInPage();
const homePage = new HomePage();

Then('Sign In button present', async () => {
    expect(await signInPage.isSignInButtonPresent()).to.equal(true);
});

Then('Sign In button has text {string}', async (expectedButtonText: string) => {
    expect(await signInPage.getSubmitButtonText()).to.equal(expectedButtonText);
});

Then('Email label present', async () => {
    expect(await signInPage.isEmailLabelPresent()).to.equal(true);
});

Then('Email label has text {string}', async (expectedLabelText: string) => {
    expect(await signInPage.getEmailLabelText()).to.equal(expectedLabelText)
});


Then('Email input field present', async () => {
    expect(await signInPage.isEmailInputFieldPresent()).to.equal(true);
});


Then('Password label present', async () => {
    expect(await signInPage.isPasswordLabelPresent()).to.equal(true);
});


Then('Password label has text {string}', async (expectedLabelText) => {
    expect(await signInPage.getPasswordLabelText()).to.equal(expectedLabelText);
});

Then('Password input field present', async () => {
    expect(await signInPage.isPasswordInputFieldPresent()).to.equal(true);
});

When('user tries to login with {string} {string}', async (email: string, password: string) => {
    await signInPage.signIn(email, password);
});

When('user waits for home page would load', () => {
    return homePage.waitForClearFilterButton();
});

Then('the home page has been loaded', async () => {
    expect(await homePage.isClearFilterButtonPresent()).to.equal(true);
});

Then('email has type attribute email', async () => {
    expect(await signInPage.getEmailTypeAttribute()).to.equal('email');
});

Then('email has required attribute', async () => {
    expect(await signInPage.getEmailRequiredAttribute()).to.equal('true');
});

Then('password has type attribute password', async () => {
    expect(await signInPage.getPasswordTypeAttribute()).to.equal('password');
});

Then('password has required attribute', async () => {
    expect(await signInPage.getPasswordRequiredAttribute()).to.equal('true');
});

Then('error message presents', async () => {
    expect(await signInPage.isErrorMessagePresent()).to.equal(true);
});

Then('error message text is {string}', async (expectedErrorMessage) => {
    expect(await signInPage.getErrorMessageText()).to.equal(expectedErrorMessage);
});

When('waits for error message', () => {
    return signInPage.waitForErrorMessage();
});

Given('user with username: {string} password: {string}',
    (username: string, password: string) => {
        return axios.post('/auth/signup', {
            username: username,
            password: password
        })
            .then(function (response) {
                return axios.post('/auth/signin', {
                    username: username,
                    password: password
                })
                    .then(function (response) {
                        SharedContext.accessToken = response.data.accessToken;
                    })
                    .catch(function (error) {
                        console.log("User not creates, ", error)
                    });
            })
            .catch(function (error) {
            });
    });

