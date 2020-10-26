import {Given, Then, When} from "cucumber";
import {NavBarNotSignedIn} from "../PageObjects/NavBarNotSignedIn";
import {SignUpPage} from "../PageObjects/SignUpPage";
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

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
  return signUpPage.waitForSignInButton();
});

Then('Confirm password label has text {string}', async (expectedLabelText: string) => {
    expect(await signUpPage.getConfirmPasswordLabelText()).to.equal(expectedLabelText);
});

Then('Confirm password input field present', async () => {
  expect(await signUpPage.isConfirmPasswordInputFieldPresent()).to.equal(true);
});

Then('Confirm password label present', async () =>  {
   expect(await signUpPage.isConfirmPasswordInputFieldPresent()).to.equal(true);
});
