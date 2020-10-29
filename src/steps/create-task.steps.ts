import {Given, Then} from "cucumber";
import {navigateToCreateTaskPage, signInUserUsingApi} from "./CommonFunctions";
import {CreateTaskPage} from "../PageObjects/CreateTaskPage";
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

const createTaskPage = new CreateTaskPage();

Given('user with username: {string} password: {string} signed in',
    async (username: string, password: string) => {
    return signInUserUsingApi(username, password);
});

Given('user got to create task page', async () =>  {
    return navigateToCreateTaskPage();
});

Given('user waits for create task button', async () =>  {
   return createTaskPage.waitForCreateTaskButton();
});

Then('create task button present', async () => {
    expect(await createTaskPage.isCreateTaskButtonPresent()).to.equal(true);
});

Then('title label is present', async () => {
    expect(await createTaskPage.isTitleLabelPresent()).to.equal(true);
});

Then('title label has text {string}', async (expectedLabelText: string) => {
    expect(await createTaskPage.getTitleLabelText()).to.equal(expectedLabelText);
});

Then('title input field present', async () => {
    expect(await createTaskPage.isTitleInputFieldPresent()).to.equal(true);
});

Then('title input field has placeholder text {string}', async (expectedPlaceholderText: string) =>  {
    expect(await createTaskPage.getTitleInputFieldPlaceholderText()).to.equal(expectedPlaceholderText);
});

Then('description label is present', async () => {
    return 'pending';
});

Then('description label has text {string}', async (expectedLabelText: string) => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
