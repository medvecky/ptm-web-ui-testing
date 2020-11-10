import {Then, When} from "cucumber";
import {TaskComponent} from "../PageObjects/TaskComponent";
import {EditTaskProjectComponent} from "../PageObjects/EditTaskProjectComponent";

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

const taskComponent = new TaskComponent();
const editTaskProjectComponent = new EditTaskProjectComponent();

When('user clicks on project title with text {string}', async (projectTitle: string) => {
   return taskComponent.clickOnProjectWithTitle(projectTitle);
});

Then('edited task has status {string}', async (expectedStatus: string) => {
   expect(await editTaskProjectComponent.getTaskStatusText()).to.equal(expectedStatus);
});

When('user set project to {string}', async (projectTitle: string) =>  {
   return editTaskProjectComponent.setProject(projectTitle);
});
