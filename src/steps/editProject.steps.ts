import {Then, When} from "cucumber";
import {ProjectComponent} from "../PageObjects/ProjectComponent";
import {EditTaskComponent} from "../PageObjects/EditTaskComponent";

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

const projectComponent = new ProjectComponent();
const editTaskComponent = new EditTaskComponent();

When('user clicks on edit button', async () => {
    return projectComponent.clickOnEditButton();
});

Then('project title input field has text {string}', async (expectedTitle:string) => {
    expect(await editTaskComponent.getTitleInputFieldText()).to.equal(expectedTitle);
});

Then('project description input field has text {string}', async (expectedDescription: string) => {
    expect(await editTaskComponent.getDescriptionInputFieldText()).to.equal(expectedDescription);
});

When('user sets project title to {string}', async (title: string) => {
    return  editTaskComponent.setTitle(title);
});

When('user sets project description to {string}', async (description: string) => {
    return  editTaskComponent.setDescription(description);
});

Then('project with title {string} not present', async (title: string) => {
    expect(await projectComponent.isTitlePresent(title));
});

