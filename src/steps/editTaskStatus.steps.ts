import {Then, When} from "cucumber";
import {TaskComponent} from "../PageObjects/TaskComponent";
import {ChangeTaskStatusComponent} from "../PageObjects/ChangeTaskStatusComponent";

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

const taskComponent = new TaskComponent();
const changeTaskStatusComponent = new ChangeTaskStatusComponent();

When('user click on change task status button', async () => {
    return taskComponent.clickOnChangeStatusButton();
});

Then('edit task status has title {string}', async (expectedTitle: string) => {
    expect(await changeTaskStatusComponent.getTitleText()).to.equal(expectedTitle);
});

Then('edit task status has description {string}', async  (expectedDescription: string) =>  {
    expect(await changeTaskStatusComponent.getDescriptionText()).to.equal(expectedDescription);
});

Then('edit task status select has text {string}', async (expectedStatus: string) => {
    expect(await changeTaskStatusComponent.getSelectOptionText()).to.equal(expectedStatus);
});

When('user sets task status to {string}', async (status: string) => {
    return changeTaskStatusComponent.setStatus(status);
});

When('user waits for change status button', async () => {
    return taskComponent.waitForChangeStatusButton();
});


