import {Then} from "cucumber";
import {HomePage} from "../PageObjects/HomePage";

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

const homePage = new HomePage();

Then('open badge present', async () =>  {
    expect(await homePage.isOpenBadgePresent()).to.equal(true);
});

Then('in progress badge present', async () => {
    expect(await homePage.isInProgressBadgePresent()).to.equal(true);
});

Then('done badge present', async () => {
    expect(await homePage.isDoneBadgePresent()).to.equal(true);
});

Then('projects badge present', async () => {
    expect(await homePage.isProjectBadgePresent()).to.equal(true);
});

Then('clear filter button present', async () => {
    expect(await homePage.isClearFilterButtonPresent()).to.equal(true);
});

Then('tasks without filter button present', async () => {
    expect(await homePage.isTasksWithoutProjectButtonPresent()).to.equal(true);
});









