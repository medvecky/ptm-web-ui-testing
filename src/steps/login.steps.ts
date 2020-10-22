import {Then, When} from "cucumber";
import {LoginPage} from "../PageObjects/LoginPage";
import {HomePage} from "../PageObjects/HomePage";

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

const loginPage = new LoginPage();
const homePage = new HomePage();

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


Then('Password label has text {string}', async (expectedLabelText) => {
    expect(await loginPage.getPasswordLabelText()).to.equal(expectedLabelText);
});

Then('Password input field present', async () => {
    expect(await loginPage.isPasswordInputFieldPresent()).to.equal(true);
});

When('user tries to login with {string} {string}', async (email: string, password: string) => {
    await loginPage.signIn(email, password);
});

When('user waits for home page would load', () => {
    return homePage.waitForClearFilterButton();
});

Then('the home page has been loaded', async () => {
    expect(await homePage.isClearFilterButtonPresent()).to.equal(true);
});

Then('email has type attribute email', async () => {
    expect(await loginPage.getEmailTypeAttribute()).to.equal('email');
});

Then('email has required attribute', async () => {
    expect(await loginPage.getEmailRequiredAttribute()).to.equal('true');
});

Then('password has type attribute password', async () => {
    expect(await loginPage.getPasswordTypeAttribute()).to.equal('password');
});

Then('password has required attribute', async () => {
    expect(await loginPage.getPasswordRequiredAttribute()).to.equal('true');
});

Then('error message presents', async ()  => {
    expect(await loginPage.isErrorMessagePresent()).to.equal(true);
});

Then('error message text is {string}', async (expectedErrorMessage) =>  {
   expect(await loginPage.getErrorMessageText()).to.equal(expectedErrorMessage);
});

When('waits for error message', function () {
  return loginPage.waitForErrorMessage();
});



