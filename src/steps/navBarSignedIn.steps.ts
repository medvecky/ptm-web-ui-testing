import {Then, When} from "cucumber";
import {NavBarSignedIn} from "../PageObjects/NavBarSignedIn";

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

const navBarSignedIn = new NavBarSignedIn();

Then('nav bar brand link present', async () => {
    expect(await navBarSignedIn.isBrandLinkPresent()).to.equal(true);
});

Then('nav bar home link present', async () => {
   expect(await navBarSignedIn.isHomeLinkPresent()).to.equal(true);
});

Then('nav bar home link is active', async () => {
  expect(await navBarSignedIn.isHomeLinkActive()).to.equal(true);
});

Then('nav bar new task link present', async () => {
    expect(await navBarSignedIn.isTaskLinkPresent()).to.equal(true);
});

Then('nav bar new project link present', async () => {
   expect(await navBarSignedIn.isProjectLinkPresent()).to.equal(true);
});

When('user clicks on new project link', async () => {
    return navBarSignedIn.clickOnProjectLink();
});

Then('nav bar new task link is active', async () => {
    expect(await navBarSignedIn.isTaskLinkActive()).to.equal(true);
});

Then('nav bar home link is not active', async () => {
    expect(await navBarSignedIn.isHomeLinkActive()).to.equal(false);
});

Then('nav bar new project link is active', async () => {
    expect(await navBarSignedIn.isProjectLinkActive()).to.equal(true);
});

Then('nav bar new project link is not active', async () => {
    expect(await navBarSignedIn.isProjectLinkActive()).to.equal(false);
});

When('user clicks on new task link', async () => {
    return navBarSignedIn.clickOnTaskLink();
});







