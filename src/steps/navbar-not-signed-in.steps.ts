import {Then, When} from "cucumber";
import {NavBarNotSignedIn} from "../PageObjects/NavBarNotSignedIn";
import {SignInPage} from "../PageObjects/SignInPage";

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;
const navbarNotSignedIn = new NavBarNotSignedIn();
const signInPage = new SignInPage();

Then('home link present',  async () => {
   expect(await navbarNotSignedIn.isHomeLinkPresent()).to.equal(true);
});

Then('Sign in link present', async () =>  {
    expect(await navbarNotSignedIn.isSignInLinkPresent()).to.equal(true);
});

Then('Sign up link present', async () => {
   expect(await navbarNotSignedIn.isSignUpLinkPresent())
});

Then('Sign in link is active', async() => {
   expect(await navbarNotSignedIn.isSignInLinkActive()).to.equal(true);
});

When('user clicks on sign up link', async () =>  {
    return navbarNotSignedIn.clickOnSignUpLink();
});

When('user waits for sign in button', async () => {
    return signInPage.waitForSignInButton();
});

When('user clicks on sign in link', async () => {
   return navbarNotSignedIn.clickOnSignInLink();
});

When('user clicks on home link', async () => {
    return navbarNotSignedIn.clickOnHomeLink();
});

Then('sign up link is active', async () =>  {
    expect(await navbarNotSignedIn.isSignUpLinkActive()).to.equal(true);
});


