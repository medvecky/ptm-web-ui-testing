import {Then} from "cucumber";
import {LoginPage} from "../PageObjects/LoginPage";
import exp = require("constants");

const loginPage = new LoginPage();
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

Then('Sign In button present', async () => {
    expect(await loginPage.isSignInButtonPresent()).to.equal(true);
});

Then('Sign In button has text {string}', async (expectedButtonText: string) => {
    expect(await loginPage.getSubmitButtonText()).to.equal(expectedButtonText);
});

Then('Email label present', async () => {
    expect(await loginPage.isEmailLabelPresent()).to.equal(true);
});

Then('Email label has text {string}', async (expectedLabelText: string) => {
    expect(await loginPage.getEmailLabelText()).to.equal(expectedLabelText)
});


Then('Email input field present', async () => {
    expect(await loginPage.isEmailInputFieldPresent()).to.equal(true);
});


Then('Password label present', async () => {
    expect(await loginPage.isPasswordLabelPresent()).to.equal(true);
});


Then('Password label has text {string}', async (expectedLabelText) =>  {
    expect(await loginPage.getPasswordLabelText()).to.equal(expectedLabelText);
});

Then('Password input field present', async () =>  {
   expect(await loginPage.isPasswordInputFieldPresent()).to.equal(true);
});

