import {Given, Then, When} from "cucumber";
import {NavBarNotSignedIn} from "../PageObjects/NavBarNotSignedIn";
import {SignUpPage} from "../PageObjects/SignUpPage";
import {getTokenFromBrowserStorage} from "./CommonFunctions";
import {SharedContext} from "./sharedContext";
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

const navBar = new NavBarNotSignedIn();
const signUpPage = new SignUpPage();

Given('sign up link on nav bar present', async () => {
   expect(await navBar.isSignUpLinkPresent()).to.equal(true);
});

When('user clicks to sign up link on nav bar', async () => {
   await navBar.clickOnSignUpLink();
});

Then('sign up button present', async () =>  {
    expect(await signUpPage.isSignUpButtonPresent()).to.equal(true);
});

When('user waits for sign up button',  async() => {
  return signUpPage.waitForSignUpButton();
});

Then('Confirm password label has text {string}', async (expectedLabelText: string) => {
    expect(await signUpPage.getConfirmPasswordLabelText()).to.equal(expectedLabelText);
});

Then('Confirm password input field present', async () => {
  expect(await signUpPage.isConfirmPasswordInputFieldPresent()).to.equal(true);
});

Then('Confirm password label present', async () =>  {
   expect(await signUpPage.isConfirmPasswordLabelPresent()).to.equal(true);
});

Then('confirm password has type attribute password', async () => {
    expect(await signUpPage.getPasswordTypeAttribute()).to.equal('password');
});

Then('confirm password has required attribute', async () => {
    expect(await signUpPage.getPasswordRequiredAttribute()).to.equal('true');
});

When('user tries to sing up with {string} {string}', async (email: string, password: string) =>  {
    return signUpPage.signUp(email, password);
});

Then('access token presents in browser storage', async () => {
    const token = await getTokenFromBrowserStorage();
    expect(token).to.not.be.undefined;
    // @ts-ignore
    SharedContext.accessToken = token;
});

When('user sets email to {string}', async (email: string) => {
    await signUpPage.setEmailText(email);
});

When('user sets password to {string}', async (password: string) => {
   await signUpPage.setPasswordText(password);
});

When('user sets confirm password to {string}', async (password: string) =>  {
    await signUpPage.setConfirmPasswordText(password);
});

When('user clicks on submit button', async () => {
    await signUpPage.pressSubmitButton();
});

