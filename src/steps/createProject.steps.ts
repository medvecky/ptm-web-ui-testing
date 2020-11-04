import {Given, Then, When} from "cucumber";
import {navigateToCreateProjectPage} from "./CommonFunctions";
import {CreateProjectPage} from "../PageObjects/CreateProjectPage";
import {ProjectComponent} from "../PageObjects/ProjectComponent";

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

const createProjectPage = new CreateProjectPage();
const projectComponent = new ProjectComponent();

Given('user go to create project page', async () => {
    return navigateToCreateProjectPage();
});

Given('user waits for create project button', async () => {
    return createProjectPage.waitForCreateProjectButton();
});

Then('create project button present', async () => {
    expect(await createProjectPage.isCreateProjectButtonPresent()).to.equal(true);
});

Then('project title label is present', async () => {
    expect(await createProjectPage.isTitleLabelPresent()).to.equal(true);
});

Then('project title label has text {string}', async (expectedLabelText: string) => {
    expect(await createProjectPage.getTitleLabelText()).to.equal(expectedLabelText);
});

Then('project title input field present', async () => {
    expect(await createProjectPage.isTitleInputFieldPresent()).to.equal(true);
});

Then('project title input field has placeholder text {string}',
    async (expectedPlaceholderText: string) => {
        expect(await createProjectPage.getTitleInputFieldPlaceholderText()).to.equal(expectedPlaceholderText);
    });

Then('project description label is present', async () => {
    expect(await createProjectPage.isDescriptionLabelPresent()).to.equal(true);
});

Then('project description label has text {string}', async (expectedLabelText: string) => {
    expect(await createProjectPage.getDescriptionLabelText()).to.equal(expectedLabelText);
});

Then('project title input field has required attribute', async () => {
   expect(await createProjectPage.getTitleRequiredAttribute()).to.equal('true');
});

Then('project description input field has not required attribute', async () => {
    expect(await createProjectPage.getDescriptionRequiredAttribute()).to.equal(null);
});

When('user tries to create project with title: {string} description: {string}',
    async (title: string, description: string) => {
    return createProjectPage.createProject(title, description);
});

When('user waits for project with title {string}', async (projectTitle: string) => {
    return projectComponent.waitForCardTitleWithText(projectTitle);
});

Then('project has title {string}', async (expectedTitle: string) => {
    expect(await projectComponent.getTitleText()).to.equal(expectedTitle);
});

Then('project has description {string}', async (expectedDescription: string) => {
    expect(await projectComponent.getDescriptionText()).to.equal(expectedDescription);
});



