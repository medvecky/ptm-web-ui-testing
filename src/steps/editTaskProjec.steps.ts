import {When} from "cucumber";
import {TaskComponent} from "../PageObjects/TaskComponent";

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

const taskComponent = new TaskComponent();

When('user clicks on project title with text {string}', async (projectTitle: string) => {
   return taskComponent.clickOnProjectWithTitle(projectTitle);
});
