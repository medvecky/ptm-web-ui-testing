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

Given('user got to create task page', async () => {
    return navigateToCreateTaskPage();
});

Given('user waits for create task button', async () => {
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

Then('title input field has placeholder text {string}', async (expectedPlaceholderText: string) => {
    expect(await createTaskPage.getTitleInputFieldPlaceholderText()).to.equal(expectedPlaceholderText);
});

Then('description label is present', async () => {
    expect(await createTaskPage.isDescriptionLabelPresent()).to.equal(true);
});

Then('description label has text {string}', async (expectedLabelText: string) => {
    expect(await createTaskPage.getDescriptionLabelText()).to.equal(expectedLabelText);
});

Then('description input field is present', async () => {
    expect(await createTaskPage.isDescriptionInputFieldPresent()).to.equal(true);
});

Then('description input field has placeholder text {string}', async (expectedPlaceholderText: string) => {
    expect(await createTaskPage.getDescriptionInputFieldPlaceholderText()).to.equal(expectedPlaceholderText);
});

Then('project label present', async () => {
    expect(await createTaskPage.isProjectLabelPresent()).to.equal(true);
});

Then('project label has text {string}', async (expectedLabelText: string) => {
    expect(await createTaskPage.getProjectLabelText()).to.equal(expectedLabelText);
});

Then('project select field present', async () => {
    expect(await createTaskPage.isProjectSelectFieldPresent()).to.equal(true);
});

Then('project select has selected value {string}', async (expectedSelectedValue: string) => {
    expect(await createTaskPage.getProjectSelectCurrentValue()).to.equal(expectedSelectedValue);
});

Then('title input field has required attribute', async () => {
    expect(await createTaskPage.getTitleRequiredAttribute()).to.equal('true');
});

Then('description input field has required attribute', async () => {
    expect(await createTaskPage.getDescriptionRequiredAttribute()).to.equal('true');
});

Given('user tries to create task with title: {string} description: {string}',
    async (title: string, description: string) => {
        return createTaskPage.createTask(title, description);
    });

