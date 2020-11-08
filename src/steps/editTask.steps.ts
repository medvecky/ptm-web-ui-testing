import {Given, Then, When} from "cucumber";
import {createTask, createTaskWithProject, navigateToMainPage} from "./CommonFunctions";
import {TaskComponent} from "../PageObjects/TaskComponent";
import {EditTaskComponent} from "../PageObjects/EditTaskComponent";

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

const taskComponent = new TaskComponent();
const editTaskComponent = new EditTaskComponent();

Given('user creates task via api with title: {string} description: {string}',
    async (title: string, description: string) => {
        return createTask(title, description);
    });

Given('user go to main page', async () => {
    return navigateToMainPage();
});

When('user clicks on task title with text {string}', async (title: string) => {
    return taskComponent.clickOnTaskTitle(title);
});

When('user waits for save changes button', async () => {
    return editTaskComponent.waitForSaveChangesButton();
});

Then('save changes button present', async () => {
    expect(await editTaskComponent.isSaveChangesButtonPresent()).to.equal(true);
});

Then('task title input field has text {string}', async (expectedTitleText: string) => {
    expect(await editTaskComponent.getTitleInputFieldText()).to.equal(expectedTitleText);
});

Then('task description input field has text {string}', async (expectedDescriptionText: string) => {
    expect(await editTaskComponent.getDescriptionInputFieldText()).to.equal(expectedDescriptionText);
});

Then('task has status label', async () => {
   expect(await editTaskComponent.isStatusLabelPresent()).to.equal(true);
});

Then('task status label has text {string}', async (expectedLabelText: string) => {
   expect(await editTaskComponent.getStatusLabelText()).to.equal(expectedLabelText);
});

Given('user creates task via api with title: {string} description: {string} and project',
    async (title: string, description: string) => {
    return createTaskWithProject(title, description);
});

When('user clicks on save changes button', async () => {
    return editTaskComponent.clickOnSaveChangesButton();
});

When('user sets task title to {string}', async (title: string) => {
    return editTaskComponent.setTitle(title);
});

When('user sets task description to {string}', async (description: string) => {
    return editTaskComponent.setDescription(description);
});





