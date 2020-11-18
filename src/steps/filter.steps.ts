import {Then, When} from "cucumber";
import {HomePage} from "../PageObjects/HomePage";
import {ProjectComponent} from "../PageObjects/ProjectComponent";

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

const homePage = new HomePage();
const projectComponent = new ProjectComponent();

Then('{int} tasks presents', async (expectedNumberOfTasks: number) => {
    expect(await homePage.getNumberOfTasks()).to.equal(expectedNumberOfTasks);
});

Then('{int} task has title {string}',
    async (taskNumber: number, expectedTaskTitle: string) => {
        expect(await homePage.getNthTaskTitleText(taskNumber)).to.equal(expectedTaskTitle);
    });

When('user clicks on project with title {string}', async (projectTitle: string ) => {
    return projectComponent.clickOnTitleText(projectTitle);
});

When('user clicks on tasks without project button', async () => {
    return homePage.clickOnTaskWithoutProjectButton();
});


When('user clicks on clear filter button', async () => {
    return homePage.clickOnClearFilterButton();
});

